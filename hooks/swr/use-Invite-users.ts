import useSWR from 'swr';

import inviteRequests from '@/apis/invite-request';

export const useGetInviteUsers = (dashboardId: string | string[] | undefined, page: number) => {
  const { data, error, isLoading, mutate } = useSWR(`${dashboardId}/invitations?page=${page}`, () => inviteRequests.getInviteUsers(`${dashboardId}`, page) , {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return { data, error, isLoading, mutate };
}
