import axios from './axios';
import getToken from './localStorage';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const inviteRequests = Object.freeze({
  getInviteUsers: async (dashboardId: string, page: unknown | number) => {
    console.log('들어갔습니다.');
    try {
      const { data } = await axios.get(`dashboards/${dashboardId}/invitations`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page,
          size: 5,
        },
      });
      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },

  inviteUserInDashboard: async (dashboardId: string, { email: inviteUserEmail }: { email: string }) => {
    try {
      const { data } = await axios.post(`dashboards/${dashboardId}/invitations`, { email: inviteUserEmail }, headers);
      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },

  deleteInvitedUser: async (dashboardId: string, invitationId: string) => {
    try {
      const { data } = await axios.delete(`dashboards/${dashboardId}/invitations/${invitationId}`, headers);
      return data;
    } catch (error) {
      console.error(ERROR_MESSAGE, error);
    }
  },
});

export default inviteRequests;
