export interface InvitationResponse {
  totalCount: number;
  invitations: Invitation[];
}

interface Invitation {
  id: number;
  inviter: Person;
  teamId: string;
  dashboard: Dashboard;
  invitee: Person;
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Person {
  nickname: string;
  email: string;
  id: number;
}

interface Dashboard {
  title: string;
  id: number;
}