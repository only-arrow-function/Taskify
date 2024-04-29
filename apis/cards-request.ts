import axios from './axios';

import getToken from './cookie';
import { Card, CardDetail, UpdateCardResponse } from '@/types/card';
import { ColumnType } from '@/types/fetch-column.type';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const cardsRequests = Object.freeze({
  fetchCards: async (columnId: number, cursorId: number) => {
    const { data } = await axios.get<ColumnType>(`/cards?${cursorId ? `cursorId=${cursorId}` : ''}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        size: 5,
        columnId: columnId,
      },
    });
    return data;
  },

  postCard: async (cardInfo: Card) => {
    try {
      const { data } = await axios.post('cards', cardInfo, headers);

      return data;
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
    }
  },

  putCard: async (cardId: number, cardInfo: any) => {
    return await axios.put(`cards/${cardId}`, cardInfo, headers);
  },

  getCardDetail: async (cardId: number) => {
    try {
      const { data } = await axios.get<CardDetail>(`cards/${cardId}`, headers);

      return data;
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
    }
  },

  deleteCard: async (cardId: number) => {
    try {
      await axios.delete(`cards/${cardId}`, headers);
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
      throw new Error(err.message);
    }
  },
});

export default cardsRequests;
