import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import invitationRequest from '@/apis/invitations-request';

export const useInvitedDashboard = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['invited-dashboard'],
    queryFn: invitationRequest.getInvitations,
  });

  return { data, isLoading, error, isError };
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
