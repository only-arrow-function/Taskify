import { useInfiniteQuery, useMutation, QueryClient } from '@tanstack/react-query';

import cardsRequests from "@/apis/cards-request";

const PAGE_DASHBOARD_COUNT = 5;

export const useInfiniteCardsQuery = (columnId: string) => {
  const { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [`${columnId}-cards`],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) =>
      await cardsRequests.fetchCards(columnId, pageParam),

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