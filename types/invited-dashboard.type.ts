import { InviteeType } from '@/constant/type/data/dashboard.type';

interface Invitation {
  id: number;
  inviter: InviteeType;
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: InviteeType;
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InvitationsResponse {
  cursorId: number;
  invitations: Invitation[];
}
