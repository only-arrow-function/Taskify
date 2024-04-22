import axios from './axios';
import getToken from './localStorage';
import { DashboardColors } from '@/components/dashboard/dashboard.constants';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

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
  signup: async (email: string, nickname: string, password: string) => {
    try {
      const { data } = await axios.post('users', {
        email,
        nickname,
        password,
      });
      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
      throw error;
    }
  },

  fetchDashboards: async (page: number) => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.get(`dashboards?page=${page}&size=5&navigationMethod=pagination`, headers);
      await new Promise((resolve) => setTimeout(() => resolve(1), 1000));
      return data;
    } catch (error) {
      return error;
    }
  },
  createDashboard: async (dashbaordData: { title: string; color: DashboardColors }) => {
    try {
      const { data } = await axios.post('dashboards', dashbaordData, headers);
      return data;
    } catch (error) {
      return error;
    }
  },

  // 다른 API 요청도 여기에 추가 가능
});

export default requests;
