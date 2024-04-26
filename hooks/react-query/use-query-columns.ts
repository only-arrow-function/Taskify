import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';

import columnRequest from '@/apis/column-request';

export const useColumnsQuery = (dashboardId: number) => {
  const query = useQuery({
    queryKey: [`${dashboardId}-columns`],
    queryFn: async () =>
      await columnRequest.fetchColumns(dashboardId),
  });

  return query;
}

export const useColumnsCreateMutation = (
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

export const useColumnsEditMutation = (
  columnId: number,
  dashboardId: number,
  columnData: { title: string },
  queryClient: QueryClient,
) => {
  const query = useMutation({
    mutationFn: async () => await columnRequest.updateColumn(columnData, columnId),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`${dashboardId}-columns`] });
    },
  });

  return query;
};

export const useColumnsDeleteMutation = (columnId: number, dashboardId: number, queryClient: QueryClient) => {
  const query = useMutation({
    mutationFn: async () => await columnRequest.deleteColumn(columnId),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [`${dashboardId}-columns`] });
    },
  });

  return query;
}
