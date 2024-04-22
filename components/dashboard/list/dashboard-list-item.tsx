import Link from 'next/link';
import DashboardListItemSkeleton from './dashboard-list-item-skeleton';
import DashboardOpenButton from '@/components/buttons/domain/dashboard-open-button';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';

const DashboardListItem = (props: { currentPage: number }) => {
  const { data, isLoading } = useDashboards(props.currentPage);
  if (!data || isLoading) return <DashboardListItemSkeleton />;
  return (
    <>
      {data.dashboards.map((dashboard) => (
        <li key={dashboard.id} className="relative">
          <Link href={`/dashboard/${dashboard.id}`}>
            <DashboardOpenButton color={dashboard.color}>{dashboard.title}</DashboardOpenButton>
          </Link>
        </li>
      ))}
    </>
  );
};

export default DashboardListItem;
