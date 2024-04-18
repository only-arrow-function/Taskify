import useSWR from 'swr';
import requests from '@/apis/request';
import { DashboardColors } from '@/types/color.type';

interface DashboardItem {
  color: DashboardColors;
  createdAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
}

interface DashboardResponse {
  cursorId: null;
  dashboards: DashboardItem[];
  totalCount: number;
}

export const useDashboards = () => {
  const { data, isLoading, error, mutate } = useSWR<DashboardResponse>(
    '/dashboards',
    requests.fetchDashboards,
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};
