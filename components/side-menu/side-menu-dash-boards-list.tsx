import { useState } from 'react';

import DashboardPaginationButton from '@/components/buttons/pagination/dashboard-pagination-button';
import SideMenuDashBoard from '@/components/side-menu/side-menu-dash-boards';

import { useInfiniteDashboardsQuery } from '@/hooks/react-query/use-query-dashboard';
import { useRevalidatePages } from '@/hooks/use-revalidate-pages';

const SideMenuDashBoardsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // server state
  const { data, isSuccess, isPending, hasNextPage, fetchNextPage } = useInfiniteDashboardsQuery();
  
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
    <>
      <div className="w-full flex flex-col justify-between items-center">
        {data &&
          data.pages[currentPage - 1] &&
          data.pages[currentPage - 1].dashboards &&
          data.pages[currentPage - 1].dashboards.map((data) => {
            return (
              <SideMenuDashBoard
                key={data.id}
                id={data.id}
                title={data.title}
                color={data.color}
                createdByMe={data.createdByMe}
                userId={data.userId}
              />
            );
          })}
      </div>
      {data && data.totalPages && (
        <div className="flex items-center">
          <span className="text-center text-sm mx-[10px]">
            {data.totalPages}페이지 중{currentPage}
          </span>
          <DashboardPaginationButton position="left" isDisabled={currentPage === 1} onClick={prevPage} />
          <DashboardPaginationButton position="right" isDisabled={currentPage >= data.totalPages} onClick={nextPage} />
        </div>
      )}
    </>
  );
};

export default SideMenuDashBoardsList;
