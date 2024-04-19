import useSWR from 'swr';
import requests from '@/apis/request';

export const useGetMembers = (dashboardId: string, currentPage: number) => {
  const { data, error, isLoading, mutate } = useSWR(
    `members?page=${currentPage}&dashboardId=${dashboardId}`,
    () => requests.getMembers(dashboardId, currentPage),
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );

  return { data, error, isLoading, mutate };
};
