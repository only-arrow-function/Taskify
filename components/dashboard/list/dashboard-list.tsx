import DashboardOpenButton from '@/components/buttons/domain/dashboard-open-button';
import NewDashboardAddButton from '@/components/buttons/domain/new-dashboard-add-button';
import DashboardPagination from '@/components/dashboard/pagination/dashboard-pagination';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';

const DashboardList = () => {
  const { data } = useDashboards();

  return (
    <section className="w-[80vw] my-6 ml-6 sm:w-[67vw] md:my-10 sm:ml-10 md:w-[70vw] xl:max-w-[1022px] lg:ml-10">
      <ul className="grid gap-[13px] md:grid-cols-2 lg:grid-cols-3">
        <li>
          <NewDashboardAddButton />
        </li>
        {data?.dashboards.map((dashboard) => (
          <li key={dashboard.id} className="relative">
            <DashboardOpenButton color={dashboard.color}>
              {dashboard.title}
            </DashboardOpenButton>
          </li>
        ))}
      </ul>
      <DashboardPagination />
    </section>
  );
};

export default DashboardList;
