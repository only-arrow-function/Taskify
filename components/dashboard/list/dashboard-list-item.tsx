import Link from 'next/link';

import DashboardListItemSkeleton from './dashboard-list-item-skeleton';
import DashboardOpenButton from '@/components/buttons/domain/dashboard-open-button';

import { useInfiniteDashboardsQuery } from '@/hooks/react-query/use-query-dashboard';

interface DashboardListItemProps {
  currentPage: number;
}

const DashboardListItem = (props: DashboardListItemProps) => {
  const { data, isPending } = useInfiniteDashboardsQuery();

  if (!data || isPending) return <DashboardListItemSkeleton />;

  return (
    <>
      {data &&
      data.pages[props.currentPage - 1] &&
      data.pages[props.currentPage - 1].dashboards &&
      data.pages[props.currentPage - 1].dashboards.map((dashboard) => (
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
