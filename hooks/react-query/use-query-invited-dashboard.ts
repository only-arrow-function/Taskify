import { QueryClient, useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import invitationRequest from '@/apis/invitations-request';

export const useInvitedDashboard = (title?: string) => {
  const { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [`invited-dashboard${title ? `/${title}` : ''}`],
    queryFn: async ({ pageParam }) => await invitationRequest.getInvitations({ cursorId: pageParam, title }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.cursorId;
    },
    select: (data) => data.pages,
  });

  return { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage };
};

export const useRefuseInvitedDashboard = (invitationId: number, queryClient: QueryClient) => {
  const mutate = useMutation({
    mutationFn: async () =>
      await invitationRequest.putInvitations({ invitationId: invitationId, inviteAccepted: false }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invited-dashboard'] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return mutate;
};

export const useAcceptInvitedDashboard = (invitationId: number, queryClient: QueryClient) => {
  const mutate = useMutation({
    mutationFn: async () =>
      await invitationRequest.putInvitations({ invitationId: invitationId, inviteAccepted: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invited-dashboard'] });
      queryClient.invalidateQueries({ queryKey: ['my-dashboard'] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return mutate;
};
