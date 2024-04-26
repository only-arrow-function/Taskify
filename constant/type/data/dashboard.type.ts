export interface IdProps {
  id: string;
}

export interface DashboardIdProps {
  dashboardId: number;
}

export interface InviteeType {
  email: string;
  id: number;
  nickname: string;
}

export interface InvitationsDataProps<InviteeType> {
  id: string;
  invitee: InviteeType;
  inviteAccepted?: boolean;
}
