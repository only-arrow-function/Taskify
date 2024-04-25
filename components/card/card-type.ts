export interface TaskCardProp {
  id: number;
  title: string;
  dueDate: string;
  tags?: string[];
  assignee: {
    profileImageUrl?: string;
    nickname: string;
    id: number;
  };
  imageUrl?: string;
}

export interface TaskCardResponse extends TaskCardProp {
  description: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
  dashboardId: number;
}

export interface CardsResponse {
  cards: TaskCardResponse[];
  totalCount: number;
  cursorId: number | null;
}
