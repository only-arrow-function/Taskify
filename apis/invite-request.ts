import { AxiosError, AxiosResponse } from 'axios';
import axios from './axios';
import getToken from './cookie';
import { Invitation } from '@/types/invited-dashboard.type';

const ERROR_MESSAGE = '에러 발생:';
const PAGE_DASHBOARD_COUNT = 5;

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const inviteRequests = Object.freeze({
  getInviteUsers: async ({ dashboardId, pageParam }: { dashboardId: number; pageParam: number }) => {
    await new Promise((resolve) => setTimeout(() => resolve(1), 300));
    try {
      const { data } = await axios.get(`dashboards/${dashboardId}/invitations`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page: pageParam,
          size: 5,
        },
      });

      const { invitations, totalCount } = data;
      const totalPages = Math.ceil(totalCount / PAGE_DASHBOARD_COUNT);

      return { invitations: invitations, totalCount: totalCount, totalPages: totalPages };
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },

  getInviteUsersAll: async (dashboardId: number) => {
    try {
      const { data } = await axios.get<{ totalCount: number; invitations: Invitation[] }>(
        `dashboards/${dashboardId}/invitations`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            size: 100,
          },
        },
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  inviteUserInDashboard: async (dashboardId: number, { email: inviteUserEmail }: { email: string }) => {
    try {
      const { data } = await axios.post(`dashboards/${dashboardId}/invitations`, { email: inviteUserEmail }, headers);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      const response = err.response as AxiosResponse;
      throw new Error(response.data.message);
    }
  },

  deleteInvitedUser: async (dashboardId: number, invitationId: string) => {
    try {
      const { data } = await axios.delete(`dashboards/${dashboardId}/invitations/${invitationId}`, headers);
      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
});

export default inviteRequests;
