import { ChangeEvent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import BasicButton from '@/components/buttons/basic-button';
import InputField from '@/components/inputs/input-field';
import ModalTitle from '@/components/modal/modal-title';
import ModalWithDimmed from '@/components/modal/modal-with-dimmed';

import { useInvitationsMutation } from "@/hooks/react-query/use-query-invite-users";

interface InviteModalType {
  handleCloseModal: () => void;
  dashboardId: string;
  totalPages: number;
}

const InviteModal = ({ handleCloseModal, dashboardId, totalPages }: InviteModalType) => {
  const [input, setInput] = useState('');

  // server state
  const queryClient = useQueryClient();
  const { mutateAsync } = useInvitationsMutation(dashboardId, { email: input }, queryClient);

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  const handleClickForInvite = async () => {
    try {
      await mutateAsync({dashboardId, input}, {
        onSuccess: () => {},
      });

      handleCloseModal();
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <ModalWithDimmed handleCloseModal={handleCloseModal}>
      <ModalTitle>초대하기</ModalTitle>
      <InputField
        type="text"
        label="이메일"
        id="invite-user-in-dashboard"
        placeholder="이메일을 입력해 주세요."
        onChange={handleInputChange}
        value={input}
      />
      <div className='flex flex-row gap-[10px] justify-end'>
        <BasicButton purpose='negative' eventHandler={handleCloseModal}>취소</BasicButton>
        <BasicButton purpose='positive' eventHandler={handleClickForInvite}>초대</BasicButton>
      </div>
    </ModalWithDimmed>
  );
};

export default InviteModal;