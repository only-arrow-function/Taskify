import DashboardPaginationFetcher from './dashboard-pagination-fetcher';
import DashboardPaginationButton from '@/components/buttons/pagination/dashboard-pagination-button';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';

const DashboardPagination = (props: any) => {
  const { data } = useDashboards();

  /**
   * ! 한 페이지에 5개씩 보여줌
   * ! 다음 버튼을 누를 때마다 5개 이후로 보여줌.
   */

  // props.nextCurrentPage;
  // props.prevCurrentPage;

  return (
    <DashboardPaginationFetcher>
      <div className="flex justify-end items-center gap-4 mt-3">
        <span className="text-sm text-grayscale-80">
          {props.totalPages} 페이지중 {props.currentPage}
        </span>
        <div className="flex">
          <DashboardPaginationButton position="left" isDisabled={false} onClick={props.prevCurrentPage} />
          <DashboardPaginationButton position="right" isDisabled={false} onClick={props.nextCurrentPage} />
        </div>
      </div>
    </DashboardPaginationFetcher>
  );
};

export default DashboardPagination;
