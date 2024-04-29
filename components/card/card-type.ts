import { ColumnItem } from '../modal/column/columns-data.type';

export interface TaskCardProp {
  id: number;
  title: string;
  dueDate: string;
  tags?: string[];
  assignee: {
    profileImageUrl?: string | null | undefined;
    nickname: string;
    id: number;
  };
  imageUrl?: string;
  columnData: ColumnItem;
  description: string;
  onSelectItem: (card: TaskCardProp) => void;
}

export interface TaskCardResponse extends TaskCardProp {
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

export type CardRequestBody = Omit<TaskCardProp, 'id' | 'assignee'> & {
  columId: number;
  assigneeUserId: number;
};
