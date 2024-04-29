import type { Members } from '@/components/tables/members.type';
import axios from './axios';

// import { StatesData } from '@/components/modal/modal-new-todo';

import getToken from './cookie';
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

  fetchDashboards: async ({ page }: { page: number }) => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.get(`dashboards?page=${page}&size=5&navigationMethod=pagination`, headers);
      await new Promise((resolve) => setTimeout(() => resolve(1), 1000));
      return data;
    } catch (error) {
      const err = error as Error;
      return {
        success: false,
        error: err.message,
      };
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
  fetchColumns: async (dashboardId: string) => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.get(`/columns?dashboardId=${dashboardId}`, headers);
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  fetchCards: async (columnId: string) => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.get(`/cards?columnId=${columnId}`, headers);
      return data;
    } catch (error) {
      console.error(error);
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
  createColumn: async (columnData: { title: string; dashboardId: number }) => {
    try {
      const { data } = await axios.post('columns', columnData, headers);
      return data;
    } catch (error) {
      return error;
    }
  },

  sendInvite: async (emailData: { email: string }, dashboardId: string) => {
    try {
      const { data } = await axios.post(`dashboards/${dashboardId}/invitations`, emailData, headers);

      return data;
    } catch (error) {
      return error;
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
  // 다른 API 요청도 여기에 추가 가능

  postCardImage: async (columnId: number, imageData: FormData) => {
    try {
      const { data } = await axios.post(`columns/${columnId}/card-image`, imageData, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
      });

      return data.imageUrl;
    } catch (error) {
      console.log(ERROR_MESSAGE, error);
    }
  },

  postCard: async (cardInfo: any) => {
    try {
      const { data } = await axios.post('cards', cardInfo, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (error) {
      console.log(ERROR_MESSAGE, error);
    }
  },
});

export default requests;
