import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import membersRequests from '@/apis/members-request';

export const useMembersQuery = (dashboardId: number | undefined, currentPage: number) => {
  if (!dashboardId) return { data: null, isPending: null };

  const { data, isSuccess, isError } = useQuery({
    queryKey: ['members', dashboardId, currentPage],
    queryFn: () => membersRequests.getMembers(dashboardId, currentPage),
  });

  return { data, isSuccess, isError };
};

export const useDeleteMembers = (dashboardId: number, memberId: number, currentPage: number) => {
  const queryClient = useQueryClient();

  const query = useMutation({
    mutationFn: async () => await membersRequests.deleteMember(memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members', dashboardId, currentPage] });
    },
    onError: (error) => {
      console.error('에러 발생:', error);
    },
  });

  return query;
};

export const useAllMembers = (dashboardId: number) => {
  return useQuery({
    queryKey: ['members'],
    queryFn: () => membersRequests.getAllMembers(dashboardId),
  });
};
