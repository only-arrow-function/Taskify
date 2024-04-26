import useSWR from 'swr';
import requests from '@/apis/request';

export interface CardItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    id: number;
    nickname: string;
    profileImageUrl?: string | null;
  };
  imageUrl: string;
  teamId: string;
  dashboardId: string;
  columnId: string;
  createdAt: string;
  updatedAt: string;
}

interface CardResponse {
  totalCount: string;
  cards: CardItem[];
  cursorId: string;
}

// export const useCards = (columnId: string) => {
//   const { data, isLoading, error, mutate } = useSWR<CardResponse>(`/cards/${columnId}`, () =>
//     requests.fetchCards(columnId),
//   );

//   return {
//     data,
//     isLoading,
//     error,
//     mutate,
//   };
// };
