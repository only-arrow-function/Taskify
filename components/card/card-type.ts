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
