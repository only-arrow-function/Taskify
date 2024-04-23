import axios from './axios';
import getToken from './localStorage';

import { DashboardColors } from '@/components/dashboard/dashboard.constants';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const dashboardRequest = Object.freeze({
  fetchDashboards: async ({ page, navigationMethod }: { page: number | unknown, navigationMethod: string }) => {
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
});

export default dashboardRequest;