import axios from './axios';
import getToken from './localStorage';
import { InvitationsResponse } from '@/types/invited-dashboard.type';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const invitationRequest = {
  getInvitations: async ({ title, cursorId }: { title?: string; cursorId?: number }): Promise<InvitationsResponse> => {
    const { data } = await axios.get(`invitations?${cursorId ? `cursorId=${cursorId}` : ''}`, {
      headers: headers.headers,
      params: {
        size: 5,
        title,
      },
    });
    return data;
  },
  putInvitations: async ({ invitationId, inviteAccepted }: { invitationId: number; inviteAccepted: boolean }) => {
    await axios.put(`invitations/${invitationId}`, { inviteAccepted }, headers);
  },
};

export default invitationRequest;
