import { useEffect, useState } from 'react';
import type { Comment } from '@/components/modal/todo/comment.type';
import commentsRequests from '@/apis/comments-request';

const useComment = (cardId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [nextCursorId, setNextCursorId] = useState<number | null>();

  const fetchComments = async () => {
    const data = await commentsRequests.getComments(cardId, nextCursorId);
    setComments([...comments, ...data.comments]);
    setNextCursorId(data.cursorId);
  };

  const addComment = async (commentInfo: any) => {
    try {
      const newComment = await commentsRequests.postComment(commentInfo);
      console.log(newComment);
      setComments((prevComments) => [newComment, ...prevComments]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateComment = async (commentId: number, newContent: string) => {
    try {
      await commentsRequests.putComment(commentId, newContent);
      setComments((prevComments) =>
        prevComments.map((comment) => (comment.id === commentId ? { ...comment, content: newContent } : comment)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId: number) => {
    try {
      await commentsRequests.deleteComment(commentId);
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return { comments, nextCursorId, fetchComments, addComment, updateComment, deleteComment };
};

export default useComment;
