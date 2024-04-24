import type { Comment, CommentResponse, PostCommentInfo } from '@/components/modal/todo/comment.type';
import axios from './axios';

const ERROR_MESSAGE = '에러 발생:';

const commentsRequests = Object.freeze({
  postComment: async (postCommentInfo: PostCommentInfo): Promise<Comment> => {
    const accessToken = window.localStorage.getItem('accessToken');

    const { data } = await axios.post('comments', postCommentInfo, {
      headers: { Authorization: 'Bearer ' + accessToken },
    });

    return data;
  },
  getComments: async (cardId: number, cursorId?: number | null): Promise<CommentResponse> => {
    const accessToken = window.localStorage.getItem('accessToken');

    const { data } = await axios.get('comments', {
      headers: { Authorization: 'Bearer ' + accessToken },
      params: {
        size: 5,
        cardId,
        cursorId,
      },
    });

    return data;
  },
  putComment: async (commentId: number, comment: string): Promise<Comment> => {
    const accessToken = window.localStorage.getItem('accessToken');

    const { data } = await axios.put(
      `comments/${commentId}`,
      { content: comment },
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      },
    );

    return data;
  },
  deleteComment: async (commentId: number) => {
    const accessToken = window.localStorage.getItem('accessToken');

    await axios.delete(`comments/${commentId}`, {
      headers: { Authorization: 'Bearer ' + accessToken },
    });
  },
});

export default commentsRequests;
