import axios from './axios';
// import { StatesData } from '@/components/modal/modal-new-todo';

const ERROR_MESSAGE = '에러 발생:';

const requests = Object.freeze({
  getInviteUsers: async (dashboardid: string, token: string | null) => {
    if (!token) return;

    try {
      const { data } = await axios.get(`dashboards/${dashboardid}`, {
        headers: { Authorization: 'Bearer ' + token },
      });
      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },

  login: async (email: string, password: string) => {
    try {
      const { data } = await axios.post('auth/login', { email, password });
      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
      throw error;
    }
  },

  // 다른 API 요청도 여기에 추가 가능

  postCardImage: async (columnId: number, imageData: FormData) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      const { data } = await axios.post(`columns/${columnId}/card-image`, imageData, {
        headers: { Authorization: 'Bearer ' + accessToken, 'Content-Type': 'multipart/form-data' },
      });

      return data.imageUrl;
    } catch (error) {
      console.log(ERROR_MESSAGE, error);
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
      console.log(ERROR_MESSAGE, error);
    }
  },
});

export default requests;
