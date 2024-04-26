import axios from './axios';
import getToken from './localStorage';

const token = getToken();
const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const invitationRequest = {
  getInvitations: async () => {
    const { data } = await axios.get('invitations', headers);
    return data;
  },
  putInvitations: async ({ invitationId, inviteAccepted }: { invitationId: number; inviteAccepted: boolean }) => {
    await axios.put(`invitations/${invitationId}`, { inviteAccepted }, headers);
  },
};

export default invitationRequest;
