import axios from './axios';
import getToken from './cookie';

import { DashboardColors } from '@/components/dashboard/dashboard.constants';
import { DetailDashboard } from '@/types/dashboard-detail';

const ERROR_MESSAGE = '에러 발생:';
const PAGE_DASHBOARD_COUNT = 5;

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const dashboardRequest = Object.freeze({
  fetchDashboards: async ({ page, navigationMethod }: { page: number | unknown; navigationMethod: string }) => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.get(`dashboards`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page,
          size: 5,
          navigationMethod: `${navigationMethod}`,
        },
      });

      await new Promise((resolve) => setTimeout(() => resolve(1), 300));

      const { dashboards, totalCount } = data;
      const totalPages = Math.ceil(totalCount / PAGE_DASHBOARD_COUNT);
      
      return { dashboards, totalCount, totalPages };
    } catch (error) {
      const err = error as Error;

      return {
        success: false,
        error: err.message,
      };
    }
  },

  fetchDashboardDetails: async (dashboardId: number) => {
    try {
      if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');
      const { data } = await axios.get(`dashboards/${dashboardId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      await new Promise((resolve) => setTimeout(() => resolve(1), 300));
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

  editDashboard: async (dashboardId: number, dashboardData: { title: string; color: DashboardColors }) => {
    try {
      const { data } = await axios.put(`dashboards/${dashboardId}`, dashboardData, headers);
      return data;
    } catch (error) {
      return error;
    }
  },

  detailDashbaord: async (dashboardId: number) => {
    return (await axios.get<DetailDashboard>(`dashboards/${dashboardId}`, headers)).data;
  },

  deleteDashboard: async (dashboardId: number) => {
    return (await axios.delete<DetailDashboard>(`dashboards/${dashboardId}`, headers)).data;
  },
});

export default dashboardRequest;
