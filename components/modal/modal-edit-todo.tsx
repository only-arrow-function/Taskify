import { ChangeEvent, ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react';
import { useParams } from 'next/navigation';
import BackDrop from './backdrop';
import { ColumnItem } from './column/columns-data.type';
import GridLayout from './dropdown/grid-layout';
import StateDropdown from './dropdown/state-dropdown';
import ModalNewTodoLayout from './modal-newTodo-layout';
import InputWithCalendar from './todo/input-with-calendar';
import InputWithImg from './todo/input-with-img';
import { formatDate } from '../../lib/format-date';
import BasicButton from '../buttons/basic-button';
import InputField from '@/components/inputs/input-field';
import ManagerDropdown from '@/components/modal/dropdown/manager-dropdown';
import ModalTitle from '@/components/modal/modal-title';
import InputWithTag from '@/components/modal/todo/input-with-tag';
import { useUpdateCard } from '@/hooks/react-query/use-query-cards';
import { useColumnsQuery } from '@/hooks/react-query/use-query-columns';
import { useAllMembers } from '@/hooks/react-query/use-query-members';
import useFocus from '@/hooks/use-focus';
import { CardDetail } from '@/types/card';

interface ModalEditTodoProps {
  card: CardDetail;
  columnData: ColumnItem;
  onCloseModal: () => void;
}

const ModalEditTodo = ({ columnData, card, onCloseModal }: ModalEditTodoProps) => {
  const params = useParams();
  const dashboardId = +params.id;
  const { data: members } = useAllMembers(dashboardId);

  const fetchCoulumQuery = useColumnsQuery(dashboardId);
  const updateCardMutation = useUpdateCard(fetchCoulumQuery.data!.data);

  const [title, setTitle] = useState(card.title);
  const [description, setsDescription] = useState(card.description);
  const [dueDate, setDueDate] = useState(formatDate(card.dueDate));
  const [tags, setTags] = useState(card.tags);
  const [image, setImage] = useState(card.imageUrl);
  const [selectedState, setSelectedState] = useState<ColumnItem>(columnData);

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => setTitle(event.target.value);
  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (event) => setsDescription(event.target.value);
  const handleDueDateChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setDueDate(formatDate(event.target.value));
  const handleAddTag = (newTag: string) => setTags((prevTag) => [...prevTag, newTag]);
  const handleRemoveTag = (tags: string[]) => setTags([...tags]);
  const handleUpdateImage = (url: string) => setImage(url);

  const handleSelectedState = (updatedState: ColumnItem) => {
    setSelectedState(updatedState);
  };

  const isDisabled = !title || !description || !dueDate || !tags;

  const handleSubmit = async () => {
    if (isDisabled) return;

    let data: any;

    if (image) {
      data = {
        columnId: selectedState.id,
        assigneeUserId: card.assignee.id,
        dashboardId: dashboardId,
        title: title,
        description,
        tags,
        dueDate,
        imageUrl: image,
      };
    } else {
      data = {
        columnId: selectedState.id,
        assigneeUserId: card.assignee.id,
        dashboardId: dashboardId,
        title: title,
        description,
        tags,
        dueDate,
      };
    }

    const transformedData = {
      id: card.id,
      data,
    };

    console.log(data);

    await updateCardMutation.mutateAsync(transformedData);
    onCloseModal();
  };

  const focusRef = useFocus<HTMLButtonElement>();

  return (
    <>
      <BackDrop onCloseModal={onCloseModal} />
      <ModalNewTodoLayout>
        <ModalTitle>할 일 수정</ModalTitle>
        <GridLayout>
          <StateDropdown
            ref={focusRef}
            columnStates={fetchCoulumQuery.data!.data}
            selectedState={selectedState}
            onSelectedColumn={handleSelectedState}
          />
          <ManagerDropdown members={members} assignee={card.assignee} />
        </GridLayout>
        <InputField
          label="제목"
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력해주세요"
        />
        <InputField
          label="설명"
          type=""
          id="context"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="설명을 입력해주세요"
        />
        <InputWithCalendar label="마감일" value={dueDate} onChange={handleDueDateChange} />
        <InputWithTag
          label="태그"
          id="tag"
          type="text"
          placeholder="입력 후 Enter"
          tags={tags}
          onAddTag={handleAddTag}
          onRemoveTag={handleRemoveTag}
        />
        <InputWithImg
          label="이미지"
          id="image"
          value={image}
          onChangeImageURL={handleUpdateImage}
          columnId={card.columnId}
        />
        <div className="flex justify-end items-center gap-[10px] mt-[10px]">
          <BasicButton purpose="negative" eventHandler={onCloseModal}>
            취소
          </BasicButton>
          <BasicButton type="button" purpose="positive" eventHandler={handleSubmit}>
            확인
          </BasicButton>
        </div>
      </ModalNewTodoLayout>
    </>
  );
};

export default ModalEditTodo;
