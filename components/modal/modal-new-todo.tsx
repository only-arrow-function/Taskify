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

export interface StatesData {
  columnId: number;
  assigneeUserId: number;
  dashboardId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: File | null;
}

// columnId, assigneeUserId : 어디서 가져올까? columnId는 props로? assigneeUserId: useSWR?
const ModalNewTodo = () => {
  const [states, setStates] = useState<StatesData>({
    columnId: 20004,
    assigneeUserId: 1546,
    dashboardId: 5947,
    title: '',
    description: '',
    dueDate: '',
    tags: [],
    imageUrl: null,
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const isValidateStates = () => {
    const statesKeys = Object.keys(states) as (keyof StatesData)[];

    for (const key of statesKeys) {
      if (key === 'tags' && states[key].length === 0) return false;
      if (!states[key]) return false;
      // console.log(!states[key]);
    }

    return true;
  };

  const formatDate = (date: string) => {
    return date.replaceAll('T', ' ');
  };

  const handleStateChange = (e: ChangeEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    if (target.name === 'imageUrl') {
      const file = target.files?.[0];
      setStates((prevStates) => ({
        ...prevStates,
        [target.name]: file,
      }));

      isValidateStates();
      return;
    }

    setStates((prevStates) => ({
      ...prevStates,
      [target.name]: target.value,
    }));
  };

  const handleBlur = () => {
    if (isValidateStates()) {
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

    setIsDisabled(isValidateStates());
  };

  const handleTagRemove = () => {
    setStates((prevStates) => ({
      ...prevStates,
      tags: prevStates.tags.slice(0, -1),
    }));

    if (states.tags.length < 2) {
      setIsDisabled(true);
    }
  };

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const statesArray = Object.entries(states);

    if (!statesArray.every(([, value]) => !!value)) return;

    const formData = new FormData();
    formData.append('image', states.imageUrl);

    const imageUrl = await requests.postCardImage(states.columnId, formData);

    const postStates = {
      ...states,
      dueDate: formatDate(states.dueDate),
      imageUrl: imageUrl,
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
            value={states.title}
            onChange={handleStateChange}
            onBlur={handleBlur}
          />
          <InputField
            label="설명"
            type=""
            id="context"
            placeholder="설명을 입력해주세요"
            name="description"
            value={states.description}
            onChange={handleStateChange}
            onBlur={handleBlur}
          />
          <InputField
            label="마감일"
            type="datetime-local"
            id="calendar"
            placeholder="날짜를 입력해주세요"
            name="dueDate"
            value={states.dueDate}
            onChange={handleStateChange}
            onBlur={handleBlur}
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
            onBlur={handleBlur}
          />
          <InputWithImg
            label="이미지"
            id="image"
            name="imageUrl"
            value={states.imageUrl}
            onChange={handleStateChange}
          />
          <ModalButtonGroup positiveName="생성" disabled={isDisabled} />
        </form>
      </ModalNewTodoLayout>
    </>
  );
};

export default ModalNewTodo;
