import { Dispatch, SetStateAction } from 'react';
import DashboardPaginationButton from '@/components/buttons/pagination/dashboard-pagination-button';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';

interface DashboardPaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PAGE_DASHBOARD_COUNT = 5;

const DashboardPagination = (props: DashboardPaginationProps) => {
  const { data, isLoading, error } = useDashboards(props.currentPage);

  if (!data) return null;

  const totalPages =
    data!.totalCount % PAGE_DASHBOARD_COUNT === 0
      ? data!.totalCount / PAGE_DASHBOARD_COUNT
      : Math.ceil(data!.totalCount / PAGE_DASHBOARD_COUNT);

  const nextCurrentPage = () => props.setCurrentPage((prevPage) => (prevPage >= totalPages ? prevPage : prevPage + 1));
  const prevCurrentPage = () => props.setCurrentPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));

  return (
    <div className="flex justify-end items-center gap-4 mt-3">
      <span className="text-sm text-grayscale-80">
        {totalPages} 페이지중 {props.currentPage}
      </span>
      <div className="flex">
        <DashboardPaginationButton position="left" isDisabled={props.currentPage === 1} onClick={prevCurrentPage} />
        <DashboardPaginationButton
          position="right"
          isDisabled={props.currentPage === totalPages}
          onClick={nextCurrentPage}
        />
      </div>
    </div>
  );
};

export default DashboardPagination;
