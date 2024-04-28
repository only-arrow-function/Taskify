import { useState } from 'react';
import Image from 'next/image';

import InviteCancelButton from './invite-cancel-button';
import InviteTableSkeleton from './invite-table-skeleton';
import BasicButton from '../../buttons/basic-button';
import DashboardPaginationButton from '../../buttons/pagination/dashboard-pagination-button';
// import InviteModal from '../../dashboard/modal/Invite-modal';

import { DashboardIdProps, InvitationsDataProps, InviteeType } from '@/constant/type/data/dashboard.type';

import { useInfiniteInviteUsersQuery } from '@/hooks/react-query/use-query-invite-users';
import { useRevalidatePages } from '@/hooks/use-revalidate-pages';

import NoEmailIcon from '@/public/icon/no-email.svg';
import { useInviteToggleStore } from '@/store/invite/invite-toggle-store';

const InviteTable = ({ dashboardId }: DashboardIdProps) => {
  const { handleOpenToggle } = useInviteToggleStore();
  const [currentPage, setCurrentPage] = useState(1);

  // server state
  const { data, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteInviteUsersQuery({ dashboardId });
        
  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  useRevalidatePages(data, currentPage, setCurrentPage); // 최종 페이지 길이 최신화

  return (
    <div className="flex w-full px-[28px] py-[32px] flex-col rounded-md bg-white">
      <div className="flex items-center justify-between mb-[20px]">
        <span className="text-center text-lg font-bold">초대 내역</span>
          {data && !!data.pages[0]?.totalPages && (
            <div className="flex items-center gap-[10px]">
              <span className="text-xs text-grayscale-80 sm:text-sm">{currentPage}페이지</span>
                <div className="flex">
                  <DashboardPaginationButton onClick={prevPage} isDisabled={currentPage === 1} position="left" />
                  <DashboardPaginationButton
                    onClick={nextPage}
                    isDisabled={currentPage >= data.pages[0].totalPages}
                    position="right"
                  />
                </div>
            </div>
        )}
      </div>
      <div className="flex justify-between items-center mb-[10px]">
        <span className="text-grayscale-50 text-sm font-normal leading-normal">이메일</span>
        <BasicButton purpose="positive" eventHandler={handleOpenToggle}>
          초대하기
        </BasicButton>
      </div>
      <ul className="flex flex-col items-center justify-between">
        {!data || isPending || isFetchingNextPage ? (<InviteTableSkeleton />) : (
          !!data.pages[currentPage - 1]?.invitations.length && (
            data.pages[currentPage - 1]?.invitations.map(({ id, invitee, inviteAccepted }: InvitationsDataProps<InviteeType>) => (
              <li
                key={id}
                className="w-full flex flex-row justify-between items-center border-b border-grayscale-30 py-[12px]"
              >
                <span>{invitee.email}</span>
                <InviteCancelButton purpose="negative" invitationId={id} dashboardId={dashboardId}>
                  취소
                </InviteCancelButton>
              </li>
          )))
        )}
        {data && !data?.totalPages && (
          <>
            <Image src={NoEmailIcon} alt="빈 이메일" />
            <span className="text-grayscale-40">아직 초대한 멤버가 없어요</span>
          </>
        )}
      </ul>
    </div>
  );
};

export default InviteTable;
