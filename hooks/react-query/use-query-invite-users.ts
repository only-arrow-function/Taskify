import { useInfiniteQuery, useMutation, QueryClient } from '@tanstack/react-query'

import inviteRequests from '@/apis/invite-request';

const PAGE_DASHBOARD_COUNT = 5;

interface QueryProps {
  dashboardId: string;
}

export const useInfiniteInviteUsersQuery = ({ dashboardId }: QueryProps) => {
  const { data, isSuccess, isPending, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [`${dashboardId}-invitations`],
    queryFn: async ({ pageParam = 1 }) => await inviteRequests.getInviteUsers(dashboardId, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage) return undefined;
    
      const totalPages = Math.ceil(lastPage.totalCount / PAGE_DASHBOARD_COUNT);
      const nextPage = allPages.length + 1;
    
      if (nextPage <= totalPages) {
        return nextPage;
      } else {
        return undefined;
      }
    },
    select: (data) => {
      // const flattenResults = data.pages.flatMap(page => page.invitations);
      const totalCount = data.pages[0]?.totalCount || 0;
      const totalPages = Math.ceil(totalCount / PAGE_DASHBOARD_COUNT);
      return { totalPages, totalCount, pages: data.pages };
    },
  });

  return { data, isSuccess, isPending, hasNextPage, fetchNextPage };
};

export const useInvitationsMutation = (dashboardId: string, { email: input }: {email: string}, queryClient: QueryClient) => {
  const query = useMutation({
    mutationFn: async () => await inviteRequests.inviteUserInDashboard(dashboardId, { email: input }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`${dashboardId}-invitations`]})
    },
  });

  return query;
}

export const useInvitationsDeleteMutation = (dashboardId: string, invitationId: string, queryClient: QueryClient) => {
  const query = useMutation({
    mutationFn: async () => await inviteRequests.deleteInvitedUser(dashboardId, invitationId),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`${dashboardId}-invitations`]})
    },
  });

  return query;
}
