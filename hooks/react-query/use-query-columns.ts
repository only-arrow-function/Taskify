import { useQuery, useInfiniteQuery, useMutation, QueryClient } from '@tanstack/react-query';

import columnRequest from '@/apis/column-request';

const PAGE_COUNT = 5;

export const useColumnsQuery = (dashboardId: number) => {
  const query = useQuery({
    queryKey: [`${dashboardId}-columns`],
    queryFn: async () =>
      await columnRequest.fetchColumns(dashboardId),
  });

  return query;
}

export const useColumnsMutation = (
  columnData: { title: string; dashboardId: number },
  queryClient: QueryClient,
) => {
  const query = useMutation({
    mutationFn: async () => await columnRequest.createColumn(columnData),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`${columnData.dashboardId}-columns`] });
    },
  });

  return query;
};
