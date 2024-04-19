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
  const { title, description, dueDate, tags, isFilled,
    setTitle, setDescription, setDueDate, setTags } = useIsFormFilled();
  
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

  const handleStateChange = (event: ChangeEvent, setter: () => void) => {
    event.preventDefault();
    setter(event.target.value); // 혹시 타입 에러 잡아주실 수 있을까요?
  };

  const handleBlur = () => {
    if (isFilled) {
      setIsDisabled(false);
      return;
    }

    setIsDisabled(true);
  };

  const handleTagAdd = (newTag: string) => {
    setStates((prevStates) => ({
      ...prevStates,
      tags: [...prevStates.tags, newTag],
    }));

    setIsDisabled(isFilled);
  };

  const handleTagRemove = () => {
    setStates((prevStates) => ({
      ...prevStates,
      tags: prevStates.tags.slice(0, -1),
    }));

    if (formStates.tags.length < 2) {
      setIsDisabled(true);
    }
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
          <ManagerDropdown
            placeholder="이름을 입력해 주세요"
          />
          <InputField
            label="제목"
            type="text"
            id="title"
            placeholder="제목을 입력해주세요"
            name="title"
            value={title}
            onChange={(e) => handleStateChange(e, setTitle)}
            onBlur={handleBlur}
          />
          <InputField
            label="설명"
            type=""
            id="context"
            placeholder="설명을 입력해주세요"
            name="description"
            value={description}
            onChange={(e) => handleStateChange(e, setDescription)}
            onBlur={handleBlur}
          />
          <InputField
            label="마감일"
            type="datetime-local"
            id="calendar"
            placeholder="날짜를 입력해주세요"
            name="dueDate"
            value={dueDate}
            onChange={(e) => handleStateChange(e, setDueDate)}
            onBlur={handleBlur}
          />
          <InputWithTag
            label="태그"
            id="tag"
            type="text"
            placeholder="입력 후 Enter"
            name="tags"
            tags={tags}
            onAddTag={handleTagAdd}
            onRemoveTag={handleTagRemove}
            onBlur={handleBlur}
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
