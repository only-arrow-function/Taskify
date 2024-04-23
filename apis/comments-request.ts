import axios from './axios';

const ERROR_MESSAGE = '에러 발생:';

interface PostCommentInfo {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

const commentsRequests = Object.freeze({
  postComment: async (postCommentInfo: PostCommentInfo) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      const { data } = await axios.post('comments', postCommentInfo, {
        headers: { Authorization: 'Bearer ' + accessToken },
      });

      return data;
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
    }
  },
  getComments: async (cardId: number, cursorId?: number) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      const { data } = await axios.get('comments', {
        headers: { Authorization: 'Bearer ' + accessToken },
        params: {
          size: 5,
          cardId,
          cursorId,
        },
      });

      return data;
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
    }
  },
  putComment: async (commentId: number, comment: string) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      const { data } = await axios.put(
        `comments/${commentId}`,
        { content: comment },
        {
          headers: { Authorization: 'Bearer ' + accessToken },
        },
      );

      return data;
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
    }
  },
  deleteComment: async (commentId: number) => {
    const accessToken = window.localStorage.getItem('accessToken');

    try {
      await axios.delete(`comments/${commentId}`, {
        headers: { Authorization: 'Bearer ' + accessToken },
      });
    } catch (error) {
      const err = error as Error;
      console.log(ERROR_MESSAGE, err.message);
    }
  },
});

export default commentsRequests;
