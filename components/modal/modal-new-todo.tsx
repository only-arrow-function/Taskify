import { ChangeEvent, FormEventHandler, useState } from 'react';

import BackDrop from './backdrop';
import ModalNewTodoLayout from './modal-newTodo-layout';
import InputWithImg from './todo/input-with-img';
import requests from '@/apis/request';
import InputField from '@/components/inputs/input-field';
import ManagerDropdown from '@/components/modal/dropdown/manager-dropdown';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalTitle from '@/components/modal/modal-title';
import InputWithTag from '@/components/modal/todo/input-with-tag';
import { useIsFormFilled } from '@/hooks/use-is-form-filled';
import { formatDate } from '@/lib/format-date';

export interface StatesData {
  columnId: number;
  assigneeUserId: number;
  dashboardId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}

// columnId, assigneeUserId : 어디서 가져올까? columnId는 props로? assigneeUserId: useSWR?
const ModalNewTodo = () => {
  const { title, description, dueDate, tags, isFilled, setTitle, setDescription, setDueDate, setAddTag, setRemoveTag } =
    useIsFormFilled();
    
  const [isDisabled, setIsDisabled] = useState(true);
  const [formStates, setStates] = useState<StatesData>({
    columnId: 20004,
    assigneeUserId: 1546,
    dashboardId: 5947,
    title: '',
    description: '',
    dueDate: '',
    tags: [],
    imageUrl: '',
  });

  const handleStateChange = (event: ChangeEvent, setter: (value: string) => void) => {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    setter(target.value);
  };

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    if (!isFilled) return;

    const postStates = {
      ...formStates,
      dueDate: formatDate(formStates.dueDate),
    };

    await requests.postCard(postStates);
  };

  return (
    <>
      <BackDrop />
      <ModalNewTodoLayout>
        <ModalTitle>할 일 생성</ModalTitle>
        <form onSubmit={handleSubmit}>
          <ManagerDropdown placeholder="이름을 입력해 주세요" />
          <InputField
            label="제목"
            type="text"
            id="title"
            placeholder="제목을 입력해주세요"
            name="title"
            value={title}
            onChange={(e) => handleStateChange(e, setTitle)}
          />
          <InputField
            label="설명"
            type=""
            id="context"
            placeholder="설명을 입력해주세요"
            name="description"
            value={description}
            onChange={(e) => handleStateChange(e, setDescription)}
          />
          <InputField
            label="마감일"
            type="datetime-local"
            id="calendar"
            placeholder="날짜를 입력해주세요"
            name="dueDate"
            value={dueDate}
            onChange={(e) => handleStateChange(e, setDueDate)}
          />
          <InputWithTag
            label="태그"
            id="tag"
            type="text"
            placeholder="입력 후 Enter"
            tags={tags}
            onAddTag={setAddTag}
            onRemoveTag={setRemoveTag}
          />
          {/* <InputWithImg
            label="이미지"
            id="image"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => handleStateChange(e, setImageUrl)}
          /> */}
          <ModalButtonGroup positiveName="생성" disabled={isFilled} />
        </form>
      </ModalNewTodoLayout>
    </>
  );
};

export default ModalNewTodo;
