import { ChangeEvent, FormEventHandler, useState } from 'react';
import BackDrop from './backdrop';
import ModalNewTodoLayout from './modal-newTodo-layout';
import InputWithImg from './todo/input-with-img';
import InputField from '@/components/inputs/input-field';
import ManagerDropdown from '@/components/modal/dropdown/manager-dropdown';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalTitle from '@/components/modal/modal-title';
import InputWithTag from '@/components/modal/todo/input-with-tag';
import { useHandleDropdown } from '@/hooks/use-handle-dropdown';

interface StatesData {
  columnId: number;
  assigneeUserId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: File | null;
}

// columnId, assigneeUserId : 어디서 가져올까? columnId는 props로? assigneeUserId: useSWR?
const ModalNewTodo = () => {
  const { isOpenDropdown, handleOpenDropdown, handleCloseDropdown } = useHandleDropdown();
  const [states, setStates] = useState<StatesData>({
    columnId: 0,
    assigneeUserId: 0,
    title: '',
    description: '',
    dueDate: '',
    tags: [],
    imageUrl: null,
  });

  const handleStateChange = (e: ChangeEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (target.name === 'imageUrl') {
      const file = target.files?.[0];
      setStates((prevStates) => ({
        ...prevStates,
        [target.name]: file,
      }));
      return;
    }

    setStates((prevStates) => ({
      ...prevStates,
      [target.name]: target.value,
    }));
  };

  const handleTagAdd = (newTag: string) => {
    setStates((prevStates) => ({
      ...prevStates,
      tags: [...prevStates.tags, newTag],
    }));
  };

  const handleTagRemove = () => {
    setStates((prevStates) => ({
      ...prevStates,
      tags: prevStates.tags.slice(0, -1),
    }));
  };

  const handleSubmit: FormEventHandler = (e) => e.preventDefault();

  return (
    <>
      <BackDrop />
      <ModalNewTodoLayout closeDropdown={handleCloseDropdown}>
        <ModalTitle>할 일 생성</ModalTitle>
        <form onSubmit={handleSubmit}>
          <ManagerDropdown
            placeholder="이름을 입력해 주세요"
            openDropdown={handleOpenDropdown}
            isOpenDropdown={isOpenDropdown}
          />
          <InputField
            label="제목"
            type="text"
            id="title"
            placeholder="제목을 입력해주세요"
            name="title"
            value={states.title}
            onChange={handleStateChange}
          />
          <InputField
            label="설명"
            type=""
            id="context"
            placeholder="설명을 입력해주세요"
            name="description"
            value={states.description}
            onChange={handleStateChange}
          />
          <InputField
            label="마감일"
            type="datetime-local"
            id="calendar"
            placeholder="날짜를 입력해주세요"
            name="dueDate"
            value={states.dueDate}
            onChange={handleStateChange}
          />
          <InputWithTag
            label="태그"
            id="tag"
            type="text"
            placeholder="입력 후 Enter"
            name="tags"
            tags={states.tags}
            onAddTag={handleTagAdd}
            onRemoveTag={handleTagRemove}
          />
          <InputWithImg
            label="이미지"
            id="image"
            name="imageUrl"
            value={states.imageUrl}
            onChange={handleStateChange}
          />
          <ModalButtonGroup positiveName="생성" />
        </form>
      </ModalNewTodoLayout>
    </>
  );
};

export default ModalNewTodo;
