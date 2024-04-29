export interface IdProps {
  id: string;
  page: string;
}

export interface DashboardIdProps {
  dashboardId: number;
  page?: number;
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
