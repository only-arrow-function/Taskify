import { PropsWithChildren } from 'react';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';

const DashboardPaginationFetcher = (props: PropsWithChildren) => {
  const { data } = useDashboards();
  if (!data || data.totalCount === 0) return null;

  return props.children;
};

export default DashboardPaginationFetcher;
