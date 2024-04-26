import { QueryClient, useInfiniteQuery, useMutation } from '@tanstack/react-query';

import commentsRequests from '@/apis/comments-request';

interface CommentRequest {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

export const useCommentsQuery = (cardId: number) => {
  const { data, isSuccess, isPending, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [`${cardId}-comments`],
    queryFn: async ({ pageParam }) => await commentsRequests.getComments(cardId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.cursorId,
    select: (data) => data.pages,
  });

  return { data, isSuccess, isPending, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage };
};

export const useAddComment = (
  {
    commentInfo,
    cardId,
  }: {
    commentInfo: CommentRequest;
    cardId: number;
  },
  queryClient: QueryClient,
) => {
  const mutate = useMutation({
    mutationFn: async () => await commentsRequests.postComment(commentInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`${cardId}-comments`] });
    },
    onError: (error) => {
      console.error('에러 발생:', error);
    },
  });

  return mutate;
};

export const updateComment = (
  {
    commentId,
    newContent,
    cardId,
  }: {
    commentId: number;
    newContent: string;
    cardId: string;
  },
  queryClient: QueryClient,
) => {
  const mutate = useMutation({
    mutationFn: async () => await commentsRequests.putComment(commentId, newContent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`${cardId}-comments`] });
    },
    onError: (error) => {
      console.error('에러 발생:', error);
    },
  });

  return mutate;
};

export const useDeleteComment = (
  {
    commentId,
    cardId,
  }: {
    commentId: number;
    cardId: number;
  },
  queryClient: QueryClient,
) => {
  const mutate = useMutation({
    mutationFn: async () => await commentsRequests.deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`${cardId}-comments`] });
    },
    onError: (error) => {
      console.error('에러 발생:', error);
    },
  });

  return mutate;
};
