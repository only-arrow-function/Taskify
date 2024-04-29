import { Draggable } from 'react-beautiful-dnd';
import AddCard from '@/components/card/add-card';
import CardListHeader from '@/components/card/card-list-header';
import CardListLayout from '@/components/card/card-list-layout';
import { TaskCardProp } from '@/components/card/card-type';
import TaskCard from '@/components/card/task-card';
import { ColumnItem } from '@/components/modal/column/columns-data.type';
import EditColumn from '@/components/modal/column/edit-column';
import Modal from '@/components/modal/modal';
import CommentSpinner from '@/components/modal/todo/comment-spinner';
import { useInfiniteCardsQuery } from '@/hooks/react-query/use-query-cards';
import { useHandleModal } from '@/hooks/use-handle-modal';
import useIntersect from '@/hooks/use-intersect';

interface CardListProps {
  columnData: ColumnItem;
  dashboardId: number;
  onSelectItem: (card: TaskCardProp) => void;
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
  } = useInfiniteCardsQuery(props.columnData.id);

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
          <EditColumn onClose={handleCloseModal} columnId={props.columnData.id} columnTitle={props.columnData.title} />
        </Modal>
      )}
      <CardListLayout>
        <CardListHeader
          title={props.columnData.title}
          count={Number(cardsData?.totalCount)}
          onClick={handleOpenModal}
        />
        <AddCard columnId={props.columnData.id} />
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
                        description={card.description}
                        columnData={props.columnData}
                        onSelectItem={props.onSelectItem}
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
