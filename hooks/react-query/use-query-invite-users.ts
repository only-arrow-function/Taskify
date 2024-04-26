import { useInfiniteQuery, useMutation, QueryClient } from '@tanstack/react-query';

import inviteRequests from '@/apis/invite-request';

interface QueryProps {
  dashboardId: string;
  page?: number;
}

export const useInfiniteInviteUsersQuery = ({ dashboardId }: QueryProps) => {
  const { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [`${dashboardId}-invitations`],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => await inviteRequests.getInviteUsers({ dashboardId, pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage) return undefined;

      const nextPage = allPages.length + 1;

      if (nextPage <= lastPage.totalPages) {
        return nextPage;
      } else {
        return undefined;
      }
    },
    select: (data) => {
      return { totalPages: data.pages[0]?.totalPages, pages: data.pages };
    },
  });

  return { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage };
};

export const useInvitationsMutation = (
  dashboardId: string,
  { email: input }: { email: string },
  queryClient: QueryClient,
) => {
  const query = useMutation({
    mutationFn: async () => await inviteRequests.inviteUserInDashboard(dashboardId, { email: input }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`${dashboardId}-invitations`] });
    },
  });

  return query;
};

export const useInvitationsDeleteMutation = (dashboardId: string, invitationId: string, queryClient: QueryClient) => {
  const query = useMutation({
    mutationFn: async () => await inviteRequests.deleteInvitedUser(dashboardId, invitationId),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`${dashboardId}-invitations`] });
    },
  });

  return query;
};
