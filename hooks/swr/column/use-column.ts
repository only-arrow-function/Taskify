import useSWR from 'swr';
import columnRequest from '@/apis/column-request';

export interface ColumnItem {
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  id: string;
  title: string;
  teamId: string;
  dashboardId: string;
}

export interface ColumnResponse {
  result: string;
  data: ColumnItem[];
}

export const useColumns = (dashboardId: string | string[] | undefined) => {
  const { data, isLoading, error, mutate } = useSWR<ColumnResponse>(
    '/columns',
    () => columnRequest.fetchColumns(dashboardId as string),
    { revalidateIfStale: false, revalidateOnFocus: false },
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};
