import DashboardPaginationButton from '@/components/buttons/pagination/dashboard-pagination-button';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';

interface DashboardPaginationProps {
  totalPages: number;
  currentPage: number;
  prevCurrentPage: () => void;
  nextCurrentPage: () => void;
}

const DashboardPagination = (props: DashboardPaginationProps) => {
  return (
    <div className="flex justify-end items-center gap-4 mt-3">
      <span className="text-sm text-grayscale-80">
        {props.totalPages} 페이지중 {props.currentPage}
      </span>
      <div className="flex">
        <DashboardPaginationButton position="left" isDisabled={false} onClick={props.prevCurrentPage} />
        <DashboardPaginationButton position="right" isDisabled={false} onClick={props.nextCurrentPage} />
      </div>
    </div>
  );
};

export default DashboardPagination;
