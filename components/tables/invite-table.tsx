import { useState } from 'react';

import Image from 'next/image';

import BasicButton from '../buttons/basic-button';
import InviteModal from '../dashboard/modal/Invite-modal';

import { useHandleModal } from '@/hooks/use-handle-modal';

import NoEmailIcon from '@/public/icon/no-email.svg';

const InviteTable = () => {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();

  return (
    <div className="flex w-full px-[28px] py-[32px] flex-col rounded-md bg-white">
      <div className="flex items-center justify-between mb-[20px]">
        <span className="text-center text-lg font-bold">초대 내역</span>
        <BasicButton purpose="positive" eventHandler={handleOpenModal}>
          초대하기
        </BasicButton>
      </div>
      <ul className="flex flex-col items-center justify-center">
        <Image src={NoEmailIcon} alt="빈 이메일" />
        <span className="text-grayscale-40">아직 초대한 멤버가 없어요</span>
      </ul>
      {isOpenModal && <InviteModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default InviteTable;
