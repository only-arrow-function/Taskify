import axios from './axios';

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

  fetchDashboards: async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');

      const { data } = await axios.get(
        'dashboards?navigationMethod=infiniteScroll',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return data;
    } catch (error) {
      return error;
    }
  },

  // 다른 API 요청도 여기에 추가 가능
});

export default requests;
