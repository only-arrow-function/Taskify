import useSWR from 'swr';
import commentsRequests from '@/apis/comments-request';

const useComment = (cardId: number) => {
  const { data, error, isLoading, mutate } = useSWR('comments', () => commentsRequests.getComments(cardId), {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const addComment = async (commentInfo: any) => {
    try {
      await commentsRequests.postComment(commentInfo);
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const updateComment = async (commentId: number, comment: string) => {
    try {
      await commentsRequests.putComment(commentId, comment);
      mutate({
        ...data,
        comments: data.comments.map((d) => {
          console.log(d);
          return d.id === commentId ? { ...d, content: comment } : d;
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId: number) => {
    try {
      await commentsRequests.deleteComment(commentId);
      mutate({
        ...data,
        comments: data.comments.filter((comment) => comment.id !== commentId),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { data, error, isLoading, mutate, updateComment, deleteComment, addComment };
};

export default useComment;
