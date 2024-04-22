import { useState, useRef } from 'react';

import Image from 'next/image';

import BasicButton from '../../buttons/basic-button';
import DashboardPaginationButton from '../../buttons/pagination/dashboard-pagination-button';
import InviteModal from '../../dashboard/modal/Invite-modal';
import TableButton from '../table-button';

import inviteRequests from '@/apis/invite-request';

import { DashboardIdProps, InvitationsDataProps, InviteeType } from '@/constant/type/data/dashboard.type';

import { useGetInviteUsers } from '@/hooks/swr/use-Invite-users';
import { useHandleModal } from '@/hooks/use-handle-modal';

import { pagesCalculate } from '@/lib/pages-calculate';

import NoEmailIcon from '@/public/icon/no-email.svg';

const InviteTable = ({ dashboardId }: DashboardIdProps) => {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();
  const [currentPage, setCurrentPage] = useState(1);

  // server state
  const { data, error, isLoading, mutate } = useGetInviteUsers(dashboardId, currentPage);
  const totalPages = pagesCalculate(data, isLoading);

  const handleDeleteInviteUsers = async (invitationId: string) => {
    const result = await inviteRequests.deleteInvitedUser(dashboardId, invitationId);
    console.log(result);
    mutate(`${dashboardId}/invitations?page=${currentPage}`);
  };

  return (
    <div className="flex w-full px-[28px] py-[32px] flex-col rounded-md bg-white">
      <div className="flex items-center justify-between mb-[20px]">
        <span className="text-center text-lg font-bold">초대 내역</span>
        <div className="flex items-center gap-[10px]">
          <span className="text-xs text-grayscale-80 sm:text-sm">{currentPage}페이지</span>
          {data && (
            <div className="flex">
              <DashboardPaginationButton
                onClick={() => setCurrentPage(currentPage - 1)}
                isDisabled={currentPage === 1}
                position="left"
              />
              <DashboardPaginationButton
                onClick={() => setCurrentPage(currentPage + 1)}
                isDisabled={currentPage === totalPages}
                position="right"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mb-[10px]">
        <span className="text-grayscale-50 text-sm font-normal leading-normal">이메일</span>
        <BasicButton purpose="positive" eventHandler={handleOpenModal}>
          초대하기
        </BasicButton>
      </div>
      <ul className="flex flex-col items-center justify-between">
        {!isLoading ? (
          data.invitations.map(({ id, invitee, inviteAccepted }: InvitationsDataProps<InviteeType>) => (
            <li
              key={id}
              className="w-full flex flex-row justify-between items-center border-b border-grayscale-30 py-[12px]"
            >
              <span>{invitee.email}</span>
              <TableButton purpose="negative" onClick={() => handleDeleteInviteUsers(id)}>
                취소
              </TableButton>
            </li>
          ))
        ) : (
          <>
            <Image src={NoEmailIcon} alt="빈 이메일" />
            <span className="text-grayscale-40">아직 초대한 멤버가 없어요</span>
          </>
        )}
      </ul>
      {isOpenModal && <InviteModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default InviteTable;
