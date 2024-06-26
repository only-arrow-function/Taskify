import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import BackDrop from './backdrop';
import { ColumnItem } from './column/columns-data.type';
import InfoWithLabel from './info-with-label';
import ModalEditTodo from './modal-edit-todo';
import ModalTitle from './modal-title';
import ModalTodoDetailLayout from './modal-todo-detail-layout';
import Comment from './todo/comment';
import CommentSpinner from './todo/comment-spinner';
import Popover from './todo/popover';
import TextareaWithLabel from './todo/textarea-with-label';
import ProgressChip from '../chips/progress-chip';
import TagChip from '../chips/tag-chip';
import { useCardQuery } from '@/hooks/react-query/use-query-card';
import { useAddComment, useCommentsQuery } from '@/hooks/react-query/use-query-comments';
import useIntersect from '@/hooks/use-intersect';
import CloseIcon from '@/public/icon/close.svg';
import MoreIcon from '@/public/icon/more.svg';

interface ModalTodoDetailProps {
  columnData: ColumnItem;
  cardId: number;
  onCloseModal: () => void;
}

const ModalTodoDetail = ({ columnData, cardId, onCloseModal }: ModalTodoDetailProps) => {
  const { id } = useParams();
  const [isOpenPopover, setIsOpenPopover] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const queryClient = useQueryClient();
  const { data } = useCardQuery(cardId);
  const { data: commentsData, hasNextPage, fetchNextPage } = useCommentsQuery(cardId);
  const { mutate: addMutate } = useAddComment(cardId, queryClient);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage) fetchNextPage();
  });

  if (!data) return;
  const comments = commentsData?.map((data) => data.comments).flat();

  const { assignee, title, description, dueDate, imageUrl, tags } = data;

  const handlePopoverClose = () => {
    setIsOpenPopover(false);
  };

  const handleModifyButtonClick = () => {
    setIsOpenEditModal(true);
    handlePopoverClose();
  };

  const handleCommentAdd = (comment: string) => {
    addMutate({
      content: comment,
      cardId: cardId,
      columnId: columnData.id,
      dashboardId: +id,
    });
  };

  return (
    <>
      <BackDrop onCloseModal={onCloseModal} />
      {isOpenEditModal && <ModalEditTodo card={data} onCloseModal={onCloseModal} columnData={columnData} />}
      {!isOpenEditModal && (
        <ModalTodoDetailLayout>
          <header className="flex flex-col-reverse gap-[6px] items-start md:flex-row md:justify-between">
            <ModalTitle>{title}</ModalTitle>
            <ul className="flex items-center justify-end w-full gap-4 md:w-auto md:gap-6">
              <li className="relative flex size-5 md:size-7">
                <button className="relative size-full">
                  <Image fill src={MoreIcon} alt="더보기" onClick={() => setIsOpenPopover(true)} />
                </button>
                {isOpenPopover && (
                  <Popover
                    cardId={cardId}
                    columnId={columnData.id}
                    onModifyButtonClick={handleModifyButtonClick}
                    onClosePopover={() => setIsOpenPopover(false)}
                  />
                )}
              </li>
              <li className="relative flex size-6 md:size-8">
                <button className="size-full" onClick={onCloseModal}>
                  <Image fill src={CloseIcon} alt="닫기" />
                </button>
              </li>
            </ul>
          </header>
          <main className="flex flex-wrap gap-4 md:flex-row-reverse md:flex-nowrap md:gap-6">
            <section className="grid grid-cols-2 gap-[1px] px-4 pt-3 pb-[10px] border border-gray-40 rounded-lg w-full md:self-start md:flex-shrink-0 md:flex md:flex-col md:w-[180px] md:p-4 md:gap-5">
              <InfoWithLabel label="담당자" nickname={assignee.nickname} imageUrl={assignee.profileImageUrl}>
                {assignee.nickname}
              </InfoWithLabel>
              <InfoWithLabel label="마감일">{dueDate}</InfoWithLabel>
            </section>
            <div className="flex flex-wrap gap-5 w-full md:gap-6">
              <section className="flex flex-col gap-4 w-full">
                <div className="flex gap-3">
                  <ProgressChip>{columnData.title}</ProgressChip>
                  <div className="w-[1px] bg-grayscale-40" />
                  <ul className="flex gap-[6px]">
                    {tags?.map((tag) => (
                      <TagChip key={tag} tag={tag} />
                    ))}
                  </ul>
                </div>
                <p className="text-xs leading-[22px]">{description}</p>
                {imageUrl && (
                  <div className="relative h-44 rounded-md overflow-hidden md:h-60 lg:h-[262px]">
                    <Image src={imageUrl} alt="관련 이미지" fill className="object-cover" />
                  </div>
                )}
              </section>
              <section className="flex flex-wrap gap-4 w-full md:gap-5">
                <TextareaWithLabel purpose="comment" onAddComment={handleCommentAdd} />
                <ul className="flex flex-col w-full gap-3 h-16 overflow-y-scroll md:h-20">
                  {comments?.map((comment) => (
                    <Comment key={comment.id} {...comment} cardId={cardId} />
                  ))}
                  {hasNextPage && (
                    <li ref={ref} className="w-full">
                      <CommentSpinner />
                    </li>
                  )}
                </ul>
              </section>
            </div>
          </main>
        </ModalTodoDetailLayout>
      )}
    </>
  );
};

export default ModalTodoDetail;
