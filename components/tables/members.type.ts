export interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

export interface Members {
  members: Member[];
  totalCount: number;
}

export interface Assignee {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}
