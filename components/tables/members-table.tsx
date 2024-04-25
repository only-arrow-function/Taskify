// import { useParams } from 'next/navigation';
import { useState } from 'react';

import { MEMBERS_PER_PAGE } from './members-constants';
import TableListItem from './table-list-item';
import DashboardPaginationButton from '../buttons/pagination/dashboard-pagination-button';
import { DashboardIdProps } from '@/constant/type/data/dashboard.type';
import { useMembersQuery } from '@/hooks/react-query/use-query-members';

const MembersTable = ({ dashboardId }: DashboardIdProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isFetchingNextPage, fetchNextPage } = useMembersQuery(dashboardId);

  if (!data) return null;
  if (isFetchingNextPage) return null;

  const { members, totalCount } = data[currentPage - 1];
  const totalPage = Math.ceil(totalCount / MEMBERS_PER_PAGE);

  const handleNextPageClick = () => {
    if (currentPage === totalPage) return;
    setCurrentPage(currentPage + 1);
    fetchNextPage();
  };

  const handlePreviousPageClick = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col justify-between min-w-[284px] max-w-[620px] rounded-lg bg-white pt-[22px] pb-4 sm:pt-[26px] sm:pb-5">
      <header className="flex justify-between items-center px-5 mb-[18px] h-[36px] sm:px-7 sm:mb-[27px] sm:h-10">
        <h3 className="text-xl font-bold text-grayscale-80 sm:text-2xl">구성원</h3>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-xs text-grayscale-80 sm:text-sm">
            {currentPage} 페이지 중 {totalPage}
          </span>
          <div className="flex">
            <DashboardPaginationButton
              onClick={handlePreviousPageClick}
              position="left"
              isDisabled={currentPage === 1}
            />
            <DashboardPaginationButton
              onClick={handleNextPageClick}
              position="right"
              isDisabled={currentPage === totalPage}
            />
          </div>
        </div>
      </header>
      <h4 className="px-5 text-sm leading-[17px] text-grayscale-50 sm:text-base sm:px-7 sm:leading-[19px]">이름</h4>
      <ul>
        {members?.map((member) => (
          <TableListItem key={member.id} member={member} dashboardId={dashboardId} />
        ))}
      </ul>
    </div>
  );
};

export default MembersTable;
