import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import type { CardRequestBody } from '@/components/card/card-type';
import cardsRequests from '@/apis/cards-request';

export const useCardQuery = (cardId: number) => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['card', cardId],
    queryFn: async () => await cardsRequests.getCardDetail(cardId),
  });

  return { data, isLoading, error, isError };
};

export const useUpdateCard = async (
  { cardId, cardInfo }: { cardId: number; cardInfo: CardRequestBody },
  queryClient: QueryClient,
) => {
  const mutate = useMutation({
    mutationFn: async () => await cardsRequests.putCard(cardId, cardInfo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['card', cardId] }),
    onError: (error) => console.error('에러발생: ' + error),
  });

  return mutate;
};

export const useDeleteCard = ({ cardId, columnId }: { cardId: number; columnId: number }, queryClient: QueryClient) => {
  const mutate = useMutation({
    mutationFn: async () => await cardsRequests.deleteCard(cardId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [`${columnId}-cards`] }),
  });

  return mutate;
};
