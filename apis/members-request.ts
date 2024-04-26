import type { Members } from '@/components/tables/members.type';
import axios from './axios';
import getToken from './localStorage';
import { MEMBERS_PER_PAGE } from '@/components/tables/members-constants';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const membersRequests = Object.freeze({
  getMembers: async (dashboardId: string, currentPage: number): Promise<Members> => {
    if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');

    const { data } = await axios.get(`members?page=${currentPage}&size=${MEMBERS_PER_PAGE}&dashboardId=${dashboardId}`, headers);
    return data;
  },
  deleteMember: async (memberId: string) => {
    if (!token) throw new Error('토큰이 없어요. 다시 로그인 해주세요.');

    await axios.delete(`members/${memberId}`, headers);
  },
});

export default membersRequests;
