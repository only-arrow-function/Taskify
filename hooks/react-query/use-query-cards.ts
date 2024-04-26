import { useInfiniteQuery, useMutation, QueryClient, useQueryClient } from '@tanstack/react-query';

import cardsRequests from '@/apis/cards-request';
import { Card } from '@/types/card';

const PAGE_COUNT = 5;

export const useInfiniteCardsQuery = (columnId: number) => {
  const { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [`${columnId}-cards`],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => await cardsRequests.fetchCards(columnId, pageParam),

    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage) return undefined;

      const totalPages = Math.ceil(lastPage.totalCount / PAGE_COUNT);
      const nextPage = allPages.length + 1;

      if (nextPage <= totalPages) {
        return nextPage;
      } else {
        return undefined;
      }
    },

    select: (data) => {
      const totalCount = data.pages[0]?.totalCount || 0;
      const totalPages = Math.ceil(totalCount / PAGE_COUNT);
      return { totalPages: totalPages, totalCount, pages: data.pages };
    },
  });

  return { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage };
};

export const useCreateCard = (columnId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Card) => cardsRequests.postCard(data),
    onError: () => console.log('useCreateCard Error'),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [`${columnId}-cards`] }),
  });
};
