// import { useParams } from 'next/navigation';
import { useState } from 'react';

import TableListItem from './table-list-item';
import DashboardPaginationButton from '../buttons/pagination/dashboard-pagination-button';
import { DashboardIdProps } from '@/constant/type/data/dashboard.type';
import { useGetMembers } from '@/hooks/swr/use-members';

const MembersTable = ({ dashboardId }: DashboardIdProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useGetMembers(dashboardId, currentPage);

  if (!data) return null;

  const { members, totalCount } = data;
  const totalPage = Math.ceil(totalCount / 4);

  const handleLeftButtonClick = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleRightButtonClick = () => {
    if (currentPage === totalPage) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col justify-between min-w-[284px] max-w-[620px] rounded-lg bg-white pt-[22px] pb-4 sm:pt-[26px] sm:pb-5">
      <header className="flex justify-between items-center px-5 mb-[18px] h-[36px] sm:px-7 sm:mb-[27px] sm:h-10">
        <h3 className="text-xl font-bold text-grayscale-80 sm:text-2xl">구성원</h3>
        <div>
          <span className="text-xs text-grayscale-80 sm:text-sm">
            {currentPage} 페이지 중 {totalPage}
          </span>
          <div className="flex">
            <DashboardPaginationButton onClick={handleLeftButtonClick} position="left" isDisabled={currentPage === 1} />
            <DashboardPaginationButton
              onClick={handleRightButtonClick}
              position="right"
              isDisabled={currentPage === totalPage}
            />
          </div>
        </div>
      </header>
      <h4 className="px-5 text-sm leading-[17px] text-grayscale-50 sm:text-base sm:px-7 sm:leading-[19px]">이름</h4>
      <ul>
        {members?.map((member) => (
          <TableListItem
            key={member.id}
            member={member}
            members={members}
            currentPage={currentPage}
            dashboardId={dashboardId}
          />
        ))}
      </ul>
    </div>
  );
};

export default MembersTable;
