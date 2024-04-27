import { Draggable } from 'react-beautiful-dnd';
import CommentSpinner from '../modal/todo/comment-spinner';
import AddCard from '@/components/card/add-card';
import CardListHeader from '@/components/card/card-list-header';
import CardListLayout from '@/components/card/card-list-layout';
import TaskCard from '@/components/card/task-card';
import EditColumn from '@/components/modal/column/edit-column';
import Modal from '@/components/modal/modal';
import { useInfiniteCardsQuery } from '@/hooks/react-query/use-query-cards';
import { useHandleModal } from '@/hooks/use-handle-modal';
import useIntersect from '@/hooks/use-intersect';

interface CardListProps {
  columnId: number;
  title: string;
  dashboardId: number;
}
const CardList = (props: CardListProps) => {
  const {
    data: cardsData,
    isSuccess,
    isPending,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    error,
  } = useInfiniteCardsQuery(props.columnId);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();
  if (typeof cardsData === 'undefined' || error) {
    console.log(error, typeof cardsData);
    return;
  }
  return (
    <>
      {isOpenModal && (
        <Modal>
          <EditColumn onClose={handleCloseModal} columnId={props.columnId} columnTitle={props.title} />
        </Modal>
      )}
      <CardListLayout>
        <CardListHeader title={props.title} count={Number(cardsData?.totalCount)} onClick={handleOpenModal} />
        <AddCard columnId={props.columnId} />
        {cardsData.pages.map((page) => {
          return page.cards.map((card, idx) => {
            return (
              <Draggable key={card.id} draggableId={String(card.id)} index={idx}>
                {(provided, snapshot) => {
                  return (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <TaskCard
                        id={card.id}
                        title={card.title}
                        dueDate={card.dueDate}
                        tags={card.tags}
                        assignee={card.assignee}
                        imageUrl={card?.imageUrl}
                      />
                    </div>
                  );
                }}
              </Draggable>
            );
          });
        })}
        {hasNextPage && (
          <span ref={ref}>
            <CommentSpinner />
          </span>
        )}
      </CardListLayout>
    </>
  );
};

export default CardList;
