import { useInfiniteQuery, useMutation, QueryClient, useQuery } from '@tanstack/react-query';

import dashboardRequest from '@/apis/dashboard-request';
import { DashboardColors } from '@/components/dashboard/dashboard.constants';
import myDashboard from '@/pages/my-dashboard';

const PAGE_DASHBOARD_COUNT = 5;

export const useDashboardsPaginationQuery = (page: number) => {
  const query = useQuery({
    queryKey: [`my-dashboard`, page],
    queryFn: async () => await dashboardRequest.fetchDashboards({ page: page, navigationMethod: 'pagination' }),
  });

  return query;
};

export const useInfiniteDashboardsQuery = () => {
  const { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [`my-dashboard`],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) =>
      await dashboardRequest.fetchDashboards({ page: pageParam, navigationMethod: 'pagination' }),

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
      const totalCount = data.pages[0]?.totalCount || 0;
      const totalPages = Math.ceil(totalCount / PAGE_DASHBOARD_COUNT);
      return { totalPages: totalPages, totalCount, pages: data.pages };
    },
  });

  return { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage };
};

export const useDashboardDetailQuery = (dashboardId: number | undefined, page: number | undefined) => {
  if (!dashboardId || !page) return { data: null, isPending: null };

  const query = useQuery({
    queryKey: [`my-dashboard`, page, dashboardId],
    queryFn: async () => await dashboardRequest.fetchDashboardDetails(dashboardId),
  });

  return query;
};

export const useDashboardsMutation = (
  dashboardData: { title: string; color: DashboardColors },
  queryClient: QueryClient,
) => {
  const query = useMutation({
    mutationFn: async () => await dashboardRequest.createDashboard(dashboardData),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`my-dashboard`] });
    },
  });

  return query;
};

export const useDashboardEditMutation = (
  dashboardId: number,
  page: number,
  dashboardData: { title: string; color: DashboardColors },
  queryClient: QueryClient,
) => {
  const query = useMutation({
    mutationFn: async () => await dashboardRequest.editDashboard(dashboardId, dashboardData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`my-dashboard`, page] });
    },
  });

  return query;
};

export const useDetailDashboard = (dashboardId: number) => {
  return useQuery({
    queryFn: () => dashboardRequest.detailDashbaord(dashboardId),
    queryKey: [`dashboard-${dashboardId}`],
  });
};

export const useDashboardDeleteMutation = (dashboardId: number, page: number, queryClient: QueryClient) => {
  const query = useMutation({
    mutationFn: async () => await dashboardRequest.deleteDashboard(dashboardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`my-dashboard`, page] });
    },
  });

  return query;
}