import Link from 'next/link';

import DashboardListItemSkeleton from './dashboard-list-item-skeleton';
import DashboardOpenButton from '@/components/buttons/domain/dashboard-open-button';

import { useDashboardsPaginationQuery } from '@/hooks/react-query/use-query-dashboard';

interface DashboardListItemProps {
  currentPage: number;
}

const DashboardListItem = (props: DashboardListItemProps) => {
  const { data, isPending } = useDashboardsPaginationQuery(props.currentPage);

  if (!data || isPending) return <DashboardListItemSkeleton />;

  return (
    <>
      {data &&
        data.dashboards.map((dashboard: any) => (
          <li key={dashboard.id} className="relative">
            <Link href={`/dashboard/${dashboard.id}`}>
              <DashboardOpenButton color={dashboard.color} isCreatedByMe={dashboard.createdByMe}>{dashboard.title}</DashboardOpenButton>
            </Link>
          </li>
        ))}
    </>
  );
};

export default DashboardListItem;
