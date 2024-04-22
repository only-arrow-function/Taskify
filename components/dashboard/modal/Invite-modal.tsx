import { ChangeEvent, useState } from "react";

import { useRouter } from "next/router"

import requests from "@/apis/request"

import BasicButton from '@/components/buttons/basic-button';
import InputField from '@/components/inputs/input-field';
import ModalTitle from '@/components/modal/modal-title';
import ModalWithDimmed from '@/components/modal/modal-with-dimmed';

import { useGetInviteUsers } from "@/hooks/swr/use-Invite-users"
import validateInviteIUserDuplicate from "@/lib/domain/validate-invite-user-dublicate";

interface InviteModalType {
  handleCloseModal: () => void;
  dashboardId: string;
  totalPages: number;
}

const InviteModal = ({ handleCloseModal, dashboardId, totalPages }: InviteModalType) => {
  const [input, setInput] = useState('');

  const { data, mutate } = useGetInviteUsers(dashboardId, 1);

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  const handleClickForInvite = async () => {
    const isDuplicate = validateInviteIUserDuplicate(data.invitations, input);
    // if (isDuplicate) {
    //   console.log("중복되었습니다.")
    //   return
    // } // 에러 처리

    await requests.inviteUserInDashboard(dashboardId, { email: input });

    for (let i = 0; i < totalPages; i++) {
      mutate(`${dashboardId}/invitations/${i}`)
    }

    handleCloseModal();
  }

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