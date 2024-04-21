import useSWR from 'swr';
import requests from '@/apis/request';

export interface ColumnItem {
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  id: string;
  title: string;
  teamId: string;
  dashboardId: string;
}

interface ColumnResponse {
  result: string;
  data: ColumnItem[];
}

export const useColumns = (dashboardId: string | string[] | undefined) => {
  const { data, isLoading, error, mutate } = useSWR<ColumnResponse>(
    '/columns',
    () => requests.fetchColumns(dashboardId),
    { revalidateIfStale: false, revalidateOnFocus: false },
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};
