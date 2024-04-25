import { Dispatch, SetStateAction } from 'react';

import DashboardPaginationButton from '@/components/buttons/pagination/dashboard-pagination-button';

import { useInfiniteDashboardsQuery } from '@/hooks/react-query/use-query-dashboard';
import { useRevalidatePages } from '@/hooks/use-revalidate-pages';

interface DashboardPaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const DashboardPagination = (props: DashboardPaginationProps) => {
  // server state
  const { data, hasNextPage, fetchNextPage } = useInfiniteDashboardsQuery();
  
  const nextPage = () => {
    props.setCurrentPage((currentPage) => currentPage + 1);
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const prevPage = () => {
    props.setCurrentPage((currentPage) => currentPage - 1);
  };

  useRevalidatePages(data, props.currentPage, props.setCurrentPage); // 최종 페이지 길이 최신화

  if (!data) return null;

  return (
    <div className="flex justify-end items-center gap-4 mt-3">
      <span className="text-sm text-grayscale-80">
        {data.pages.totalPages} 페이지중 {props.currentPage}
      </span>
      <div className="flex">
        <DashboardPaginationButton position="left" isDisabled={props.currentPage === 1} onClick={prevPage} />
        <DashboardPaginationButton
          position="right"
          isDisabled={props.currentPage >= data.totalPages}
          onClick={nextPage}
        />
      </div>
    </div>
  );
};

export default DashboardPagination;
