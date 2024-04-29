import { ChangeEvent, FocusEventHandler, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import inviteRequests from '@/apis/invite-request';
import BasicButton from '@/components/buttons/basic-button';
import InputField from '@/components/inputs/input-field';
import ModalTitle from '@/components/modal/modal-title';
import ModalWithDimmed from '@/components/modal/modal-with-dimmed';

import { useInfiniteInviteUsersQuery, useInvitationsMutation } from '@/hooks/react-query/use-query-invite-users';

interface InviteModalType {
  handleCloseModal: () => void;
  dashboardId?: number;
  totalPages?: number;
}

const InviteModal = ({ handleCloseModal, dashboardId, totalPages }: InviteModalType) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  // server state
  const queryClient = useQueryClient();
  const { mutateAsync } = useInvitationsMutation(dashboardId as number, { email: input }, queryClient);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleInputBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('유효한 이메일 형식을 입력해 주세요.');
      return;
    }

    setError('');
  };

  const handleClickForInvite = async () => {
    const allInvitations = await inviteRequests.getInviteUsersAll(dashboardId!);
    const invitationEmails = allInvitations?.invitations.map((invitation) => invitation.invitee.email);

    if (invitationEmails?.includes(input)) {
      setError('이미 초대한 멤버입니다.');
      return;
    }

    try {
      await mutateAsync();
      queryClient.invalidateQueries({ queryKey: [`${dashboardId}-invitations`] });
      setError('');
      handleCloseModal();
    } catch (error) {
      setError((error as Error).message);
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
        onBlur={handleInputBlur}
        value={input}
        error={error}
      />
      <div className={`flex flex-row gap-[10px] justify-end ${error && 'mt-4'}`}>
        <BasicButton purpose="negative" eventHandler={handleCloseModal}>
          취소
        </BasicButton>
        <BasicButton purpose="positive" eventHandler={handleClickForInvite}>
          초대
        </BasicButton>
      </div>
    </ModalWithDimmed>
  );
};

export default InviteModal;
