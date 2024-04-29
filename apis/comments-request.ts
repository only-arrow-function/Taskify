import type { Comment, CommentResponse, PostCommentInfo } from '@/components/modal/todo/comment.type';
import axios from './axios';
import getToken from './cookie';

const token = getToken();

const headers = {
  headers: { Authorization: `Bearer ${token}` },
};

const commentsRequests = Object.freeze({
  postComment: async (postCommentInfo: PostCommentInfo): Promise<Comment> => {
    const { data } = await axios.post('comments', postCommentInfo, headers);

    return data;
  },
  getComments: async (cardId: number, cursorId?: number | null): Promise<CommentResponse> => {
    const { data } = await axios.get(`comments?${cursorId ? `cursorId=${cursorId}` : ''}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        size: 5,
        cardId,
      },
    });

    return data;
  },
  putComment: async (commentId: number, comment: string): Promise<Comment> => {
    const { data } = await axios.put(
      `comments/${commentId}`,
      { content: comment },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return data;
  },
  deleteComment: async (commentId: number) => {
    await axios.delete(`comments/${commentId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
});

export default commentsRequests;
