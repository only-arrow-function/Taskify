import axios from './axios';

import getToken from './localStorage';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const cardsRequests = Object.freeze({
  fetchCards: async (columnId: string, cursorId: number) => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.get(`/cards`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          size: 5,
          cursorId,
        },
      });
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },

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
