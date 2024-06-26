import { useState } from 'react';

import SideMenuDashboardItemSkelton from './side-menu-skeleton';
import DashboardPaginationButton from '@/components/buttons/pagination/dashboard-pagination-button';
import SideMenuDashBoard from '@/components/side-menu/side-menu-dash-boards';

import { useDashboardsPaginationQuery } from '@/hooks/react-query/use-query-dashboard';
import { useRevalidatePages } from '@/hooks/use-revalidate-pages';

const SideMenuDashBoardsList = ({ page }: { page: number }) => {
  const [currentPage, setCurrentPage] = useState(page);

  // server state
  const { data, isPending } = useDashboardsPaginationQuery(currentPage);

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  useRevalidatePages(data, currentPage, setCurrentPage); // 최종 페이지 길이 최신화

  return (
    <>
      <div className="w-full flex flex-col justify-between items-center">
        {isPending || !data ? (
          <SideMenuDashboardItemSkelton />
        ) : (
          data &&
          data.dashboards.map((data: any) => {
            return (
              <SideMenuDashBoard
                key={data.id}
                id={data.id}
                title={data.title}
                color={data.color}
                createdByMe={data.createdByMe}
                userId={data.userId}
                page={currentPage}
              />
            );
          })
        )}
      </div>
      {data && data.totalPages && (
        <div className="justify-center sm:justify-start flex items-center">
          <span className="hidden sm:block text-center text-sm mr-[10px]">
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
