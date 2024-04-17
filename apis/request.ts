import axios from './axios';

const ERROR_MESSAGE = '에러 발생:';

const requests = Object.freeze({
  getInviteUsers: async (dashboardid: string) => {
    try {
      const { data } = await axios.get(`dashboards/${dashboardid}`);
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
});

export default requests;
