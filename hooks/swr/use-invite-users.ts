import useSWR from 'swr'

import requests from '@/apis/request';

export const useGetInviteUsers = (dashboardid: string | string[] | undefined) => { // 10은 하드코딩
  if (typeof dashboardid !== "string") return ;

  const { data, error, isLoading, mutate } = useSWR(`${dashboardid}/invitations`, requests.getInviteUsers , {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return { data, error, isLoading, mutate };
}
