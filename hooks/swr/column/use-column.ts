import useSWR from 'swr';
import columnRequest from '@/apis/column-request';

export interface ColumnItem {
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  teamId: string;
  dashboardId: number;
}

export interface ColumnResponse {
  result: string;
  data: ColumnItem[];
}

export const useColumns = (dashboardId: number) => {
  const { data, isLoading, error, mutate } = useSWR<ColumnResponse>(
    '/columns',
    () => columnRequest.fetchColumns(dashboardId),
    { revalidateIfStale: false, revalidateOnFocus: false },
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};
