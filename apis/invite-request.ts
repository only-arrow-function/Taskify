<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> edf00e1 (feat [노은수] : 삭제하기 기능 추가, 뮤테이션 적용)
import axios from './axios';
import getToken from './localStorage';

const ERROR_MESSAGE = '에러 발생:';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const inviteRequests = Object.freeze({
<<<<<<< HEAD
<<<<<<< HEAD
  getInviteUsers: async (dashboardId: string, page: unknown | number) => {
<<<<<<< HEAD
    console.log('들어갔습니다.');
    await new Promise((resolve) => setTimeout(() => resolve(1), 1000));
=======
>>>>>>> e84a234 (feat [노은수] : 사이드바 리액트 쿼리 데이터 연동)
=======
  getInviteUsers: async (dashboardId: string, page: number) => {
=======
  getInviteUsers: async (dashboardId: string, page: unknown | number) => {
>>>>>>> 5972300 (refactor & feat [노은수] : 삭제, 추가에 대한 뮤테이션, 최종 페이지 최신화 적용, 리액트 쿼리로 리팩토링)
    console.log('들어갔습니다.');
>>>>>>> edf00e1 (feat [노은수] : 삭제하기 기능 추가, 뮤테이션 적용)
    try {
      const { data } = await axios.get(`dashboards/${dashboardId}/invitations`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page,
<<<<<<< HEAD
          size: 5,
=======
>>>>>>> edf00e1 (feat [노은수] : 삭제하기 기능 추가, 뮤테이션 적용)
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
<<<<<<< HEAD

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
=======
>>>>>>> 6be2eae (feat [노은수] : swr을 이용한 페이지네이션 구현)
=======
});

export default inviteRequests;
>>>>>>> edf00e1 (feat [노은수] : 삭제하기 기능 추가, 뮤테이션 적용)
