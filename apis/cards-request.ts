import axios from './axios';

import { TaskCardResponse } from '@/components/card/card-type';

const ERROR_MESSAGE = '에러 발생:';

const cardsRequests = Object.freeze({
  postCard: async (cardInfo: any) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      const { data } = await axios.post('cards', cardInfo, {
        headers: { Authorization: 'Bearer ' + accessToken },
      });

      return data;
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
    }
  },
  putCard: async (cardId: number, cardInfo: any) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      const { data } = await axios.put(`cards/${cardId}`, cardInfo, {
        headers: { Authorization: 'Bearer ' + accessToken },
      });

      return data;
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
      // console.log(ERROR_MESSAGE, err.message);
    }
  },
  getCardDetail: async (cardId: number) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      const { data } = await axios.get(`cards/${cardId}`, {
        headers: { Authorization: 'Bearer ' + accessToken },
      });

      return data;
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
    }
  },

  postCard: async (cardInfo: any): Promise<TaskCardResponse> => {
    const accessToken = window.localStorage.getItem('accessToken');

    const { data } = await axios.post('cards', cardInfo, {
      headers: { Authorization: 'Bearer ' + accessToken },
    });

    return data;
  },
  putCard: async (cardId: number, cardInfo: any): Promise<TaskCardResponse> => {
    const accessToken = window.localStorage.getItem('accessToken');

    const { data } = await axios.put(`cards/${cardId}`, cardInfo, {
      headers: { Authorization: 'Bearer ' + accessToken },
    });

    return data;
  },
  getCardDetail: async (cardId: number): Promise<TaskCardResponse> => {
    const accessToken = window.localStorage.getItem('accessToken');

    const { data } = await axios.get(`cards/${cardId}`, {
      headers: { Authorization: 'Bearer ' + accessToken },
    });

    return data;
  },
  deleteCard: async (cardId: number) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      await axios.delete(`cards/${cardId}`, {
        headers: { Authorization: 'Bearer ' + accessToken },
      });
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
      throw new Error(err.message);
    }
  },
});

export default cardsRequests;
