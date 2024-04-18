import DashboardPaginationButton from '@/components/buttons/pagination/dashboard-pagination-button';

const DashboardPagination = () => {
  return (
    <div className="flex justify-end items-center gap-4 mt-3">
      <span className="text-sm text-grayscale-80">1페이지중 1</span>
      <div className="flex">
        <DashboardPaginationButton position="left" isDisabled={false} />
        <DashboardPaginationButton position="right" isDisabled={false} />
      </div>
    </div>
  );
};

export default DashboardPagination;
