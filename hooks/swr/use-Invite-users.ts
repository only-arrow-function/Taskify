import useSWR from 'swr';

import requests from '@/apis/request';

export const useGetInviteUsers = (dashboardid: string | string[] | undefined) => {
  const { data, error, isLoading, mutate } = useSWR(`${dashboardid}/invitations`, () => requests.getInviteUsers(`${dashboardid}`) , {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return { data, error, isLoading, mutate };
}
