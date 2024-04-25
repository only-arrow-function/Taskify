import useSWR from 'swr';
import cardsRequests from '@/apis/cards-request';

const useCard = (cardId: number) => {
  const { data, error, isLoading, mutate } = useSWR(`card/${cardId}`, () => cardsRequests.getCardDetail(cardId), {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  const updateCard = async (cardInfo: any) => {
    try {
      await cardsRequests.putCard(cardId, cardInfo);
      mutate({ ...data, cardInfo });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCard = async () => {
    try {
      await cardsRequests.deleteCard(cardId);
      mutate(undefined);
    } catch (err) {
      console.log(err);
    }
  };

  return { data, error, isLoading, mutate, updateCard, deleteCard };
};

export default useCard;
