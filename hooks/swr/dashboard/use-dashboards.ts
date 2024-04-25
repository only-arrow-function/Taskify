import useSWR from 'swr';
import requests from '@/apis/request';
import { DashboardColors } from '@/components/dashboard/dashboard.constants';

export interface DashboardItem {
  color: DashboardColors;
  createdAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
}

export interface DashboardResponse {
  cursorId: null;
  dashboards: DashboardItem[];
  totalCount: number;
}

export const useDashboards = ({ page }: { page: number }) => {
  const { data, isLoading, error, mutate } = useSWR<DashboardResponse>(`/dashboards/${page}`, () =>
    requests.fetchDashboards({ page }),
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};
