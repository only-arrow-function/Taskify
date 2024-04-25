import { useInfiniteQuery, useMutation, QueryClient } from '@tanstack/react-query'

import dashboardRequest from '@/apis/dashboard-request'
import { DashboardColors } from '@/components/dashboard/dashboard.constants';

const PAGE_DASHBOARD_COUNT = 5;

export const useInfiniteDashboardsQuery = () => {
  const { data, isSuccess, isPending, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [`my-dashboard`],
    queryFn: async ({ pageParam = 1 }) => await dashboardRequest.fetchDashboards({page: pageParam, navigationMethod: 'pagination'}),
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
}

export const useDashboardsMutation = (dashboardData: { title: string; color: DashboardColors }, queryClient: QueryClient) => {
  const query = useMutation({
    mutationFn: async () => await dashboardRequest.createDashboard(dashboardData),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`my-dashboard`]})
    },
  });

  return query;
}
