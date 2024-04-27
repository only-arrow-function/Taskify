import { Dispatch, SetStateAction } from 'react';

import DashboardPaginationButton from '@/components/buttons/pagination/dashboard-pagination-button';

import { useDashboardsPaginationQuery } from '@/hooks/react-query/use-query-dashboard';
import { useRevalidatePages } from '@/hooks/use-revalidate-pages';

interface DashboardPaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PAGE_DASHBOARD_COUNT = 5;

const DashboardPagination = (props: DashboardPaginationProps) => {
  // server state
  const { data } = useDashboardsPaginationQuery(props.currentPage);

  const nextPage = () => {
    props.setCurrentPage((currentPage) => currentPage + 1);
  };

  const prevPage = () => {
    props.setCurrentPage((currentPage) => currentPage - 1);
  };

  useRevalidatePages(data, props.currentPage, props.setCurrentPage); // 최종 페이지 길이 최신화

  if (!data) return null;

  return (
    <div className="flex justify-end items-center gap-4 mt-3">
      <span className="text-sm text-grayscale-80">
        {data.totalPages} 페이지중 {props.currentPage}
      </span>
      <div className="flex">
        <DashboardPaginationButton position="left" isDisabled={props.currentPage === 1} onClick={prevPage} />
        <DashboardPaginationButton
          position="right"
          isDisabled={props.currentPage >= (data.totalPages ? data.totalPages : 0)}
          onClick={nextPage}
        />
      </div>
    </div>
  );
};

export default DashboardPagination;
