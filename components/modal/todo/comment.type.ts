export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    id: number;
    nickname: string;
    profileImageUrl: string | null;
  };
}

export interface CommentResponse {
  comments: Comment[];
  cursorId: number | null;
}

export interface PostCommentInfo {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}
