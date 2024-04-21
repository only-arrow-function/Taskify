import type { Members } from '@/components/tables/members.type';
import axios from './axios';
import getToken from './localStorage';
import { DashboardColors } from '@/components/dashboard/dashboard.constants';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const requests = Object.freeze({
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
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');

      const { data } = await axios.get('dashboards?navigationMethod=infiniteScroll', headers);
      return data;
    } catch (error) {
      return error;
    }
  },

  createDashboard: async (dashboardData: { title: string; color: DashboardColors }) => {
    try {
      const { data } = await axios.post('dashboards', dashboardData, headers);
      return data;
    } catch (error) {
      return error;
    }
  },

  editDashboard: async (dashboardid: string, dashboardData: { title: string; color: DashboardColors }) => {
    if (!dashboardData.title || dashboardData.color) return;

    try {
      const { data } = await axios.put(`dashboards/${dashboardid}`, dashboardData, headers);
      return data;
    } catch (error) {
      return error;
    }
  },

  getMembers: async (dashboardId: string, currentPage: number): Promise<Members> => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');

      const { data } = await axios.get(`members?page=${currentPage}&size=4&dashboardId=${dashboardId}`, headers);
      return data;
    } catch (error) {
      console.log(ERROR_MESSAGE, error);
      return {
        members: [],
        totalCount: 0,
      };
    }
  },

  deleteMembers: async (memberId: number) => {
    try {
      await axios.delete(`members/${memberId}`, headers);
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  },

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

  inviteUserInDashboard: async (inviteUserEmail:string, dashboardid: string) => {
    try {
      const { data } = await axios.post(`dashboards/${dashboardid}/invitations`, inviteUserEmail, headers);
      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
  // 다른 API 요청도 여기에 추가 가능
});

export default requests;
