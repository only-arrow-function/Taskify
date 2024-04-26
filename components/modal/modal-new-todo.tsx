import { ChangeEvent, FormEventHandler } from 'react';

import Dimmed from './dimmed';
import ModalNewTodoLayout from './modal-newTodo-layout';
import InputWithCalendar from './todo/input-with-calendar';
import InputWithImg from './todo/input-with-img';
import BasicButton from '../buttons/basic-button';
import requests from '@/apis/request';
import InputField from '@/components/inputs/input-field';
import ManagerDropdown from '@/components/modal/dropdown/manager-dropdown';
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

const temporaryPostId = {
  columnId: 20004,
  assigneeUserId: 1546,
  dashboardId: 5947,
};

// columnId, assigneeUserId : 어디서 가져올까? columnId는 props로? assigneeUserId: useSWR?
const ModalNewTodo = ({handleCloseModal}: {handleCloseModal: ()=> void}) => {
  const { isFilled, setTitle, setDescription, setDueDate, setAddTag, setRemoveTag, setImageUrl, ...formState } =
    useIsFormFilled();

  const handleStateChange = (event: ChangeEvent, setter: (value: string) => void) => {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    setter(target.value);
  };

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    if (!isFilled) return;

    const postStates = {
      ...temporaryPostId,
      ...formState,
      dueDate: formatDate(formState.dueDate),
    };

    await requests.postCard(postStates);
  };

  return (
    <>
      <Dimmed handleCloseModal={handleCloseModal}/>
      <ModalNewTodoLayout>
        <ModalTitle>할 일 생성</ModalTitle>
        <form onSubmit={handleSubmit}>
          <ManagerDropdown placeholder="이름을 입력해 주세요" />
          <InputField
            label="제목"
            type="text"
            id="title"
            placeholder="제목을 입력해주세요"
            value={formState.title}
            onChange={(e) => handleStateChange(e, setTitle)}
          />
          <InputField
            label="설명"
            type=""
            id="context"
            placeholder="설명을 입력해주세요"
            value={formState.description}
            onChange={(e) => handleStateChange(e, setDescription)}
          />
          <InputWithCalendar
            label="마감일"
            value={formState.dueDate}
            onChange={(e) => handleStateChange(e, setDueDate)}
          />
          <InputWithTag
            label="태그"
            id="tag"
            type="text"
            placeholder="입력 후 Enter"
            tags={formState.tags}
            onAddTag={setAddTag}
            onRemoveTag={setRemoveTag}
          />
          <InputWithImg label="이미지" id="image" value={formState.imageUrl} onChangeImageURL={setImageUrl} />
          <div className="flex justify-end items-center gap-[10px] mt-[10px]">
            <BasicButton purpose='negative' eventHandler={handleCloseModal}>취소</BasicButton>
            <BasicButton purpose='positive'>확인</BasicButton>
          </div>
        </form>
      </ModalNewTodoLayout>
    </>
  );
};

export default ModalNewTodo;
