import { ChangeEvent, FormEventHandler } from 'react';

import { useParams } from 'next/navigation';
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
import { useCreateCard } from '@/hooks/react-query/use-query-cards';
import { useDetailDashboard } from '@/hooks/react-query/use-query-dashboard';
import { useAllMembers } from '@/hooks/react-query/use-query-members';
import useFocus from '@/hooks/use-focus';
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

interface ModalNewTodoProps {
  columnId: number;
  handleCloseModal: () => void;
}

// columnId, assigneeUserId : 어디서 가져올까? columnId는 props로? assigneeUserId: useSWR?
const ModalNewTodo = ({ columnId, handleCloseModal }: ModalNewTodoProps) => {
  const params = useParams();
  const dashboardId = +params.id;
  const detailDashboardQuery = useDetailDashboard(dashboardId);
  const createCardMutation = useCreateCard(columnId);

  const { data: members } = useAllMembers(dashboardId);

  const { isFilled, setTitle, setDescription, setDueDate, setAddTag, setRemoveTag, setImageUrl, ...formState } =
    useIsFormFilled();

  const handleStateChange = (event: ChangeEvent, setter: (value: string) => void) => {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    setter(target.value);
  };

  const handleSubmit = async () => {
    if (!isFilled) return;

    let data;

    if (!formState.imageUrl) {
      data = {
        columnId,
        assigneeUserId: detailDashboardQuery!.data?.userId,
        dashboardId,
        title: formState.title,
        description: formState.description,
        tags: formState.tags,
        dueDate: formatDate(formState.dueDate),
      };
    } else {
      data = {
        columnId,
        assigneeUserId: detailDashboardQuery!.data?.userId,
        dashboardId,
        ...formState,
        dueDate: formatDate(formState.dueDate),
      };
    }

    await createCardMutation.mutateAsync(data);
    handleCloseModal();
  };

  const focusRef = useFocus<HTMLButtonElement>();

  return (
    <>
      <Dimmed handleCloseModal={handleCloseModal} />
      <ModalNewTodoLayout>
        <ModalTitle>할 일 생성</ModalTitle>
        <div className="mb-[28px]">
          <ManagerDropdown placeholder="이름을 입력해 주세요" members={members} ref={focusRef} />
        </div>
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
        <InputWithImg
          label="이미지"
          id="image"
          value={formState.imageUrl}
          onChangeImageURL={setImageUrl}
          columnId={columnId}
        />
        <div className="flex justify-end items-center gap-[10px] mt-[10px]">
          <BasicButton purpose="negative" eventHandler={handleCloseModal}>
            취소
          </BasicButton>
          <BasicButton type="button" purpose="positive" eventHandler={handleSubmit} disabled={!isFilled}>
            확인
          </BasicButton>
        </div>
      </ModalNewTodoLayout>
    </>
  );
};

export default ModalNewTodo;
