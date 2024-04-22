import React, { PropsWithChildren } from 'react';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';

export default function DashboardListFetcher(props: PropsWithChildren) {
  const { data, isLoading, error } = useDashboards();

  if (!data || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return props.children;
}
