import useSWR from 'swr';
import requests from '@/apis/request';

export const useGetMembers = (dashboardId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `members?dashboardId=${dashboardId}`,
    () => requests.getMembers(dashboardId),
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );

  return { data, error, isLoading, mutate };
};
