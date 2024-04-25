import { QueryClient, useInfiniteQuery, useMutation } from '@tanstack/react-query';
import membersRequests from '@/apis/members-request';
import { MEMBERS_PER_PAGE } from '@/components/tables/members-constants';

export const useMembersQuery = (dashboardId: string) => {
  const { data, isSuccess, isPending, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [`${dashboardId}-members`],
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => await membersRequests.getMembers(dashboardId, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage) return undefined;

      const totalPage = Math.ceil(lastPage.totalCount / MEMBERS_PER_PAGE);
      const nextPage = allPages.length + 1;

      if (nextPage <= totalPage) {
        return nextPage;
      } else {
        return undefined;
      }
    },
    select: (data) => {
      // console.log(data);
      return data.pages;
    },
  });

  return {
    data,
    isSuccess,
    isPending,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export const useDeleteMembers = (dashboardId: string, memberId: string, queryClient: QueryClient) => {
  const query = useMutation({
    mutationFn: async () => await membersRequests.deleteMember(memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`${dashboardId}-members`] });
    },
  });

  return query;
};
