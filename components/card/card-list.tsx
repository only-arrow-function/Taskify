import { Draggable } from 'react-beautiful-dnd';
import AddCard from '@/components/card/add-card';
import CardListHeader from '@/components/card/card-list-header';
import CardListLayout from '@/components/card/card-list-layout';
import TaskCard from '@/components/card/task-card';
import EditColumn from '@/components/modal/column/edit-column';
import Modal from '@/components/modal/modal';
import { useInfiniteCardsQuery } from '@/hooks/react-query/use-query-cards';
import { useHandleModal } from '@/hooks/use-handle-modal';

interface CardListProps {
  id: string;
  title: string;
  dashboardId: string | string[] | undefined;
}
const CardList = (props: CardListProps) => {
  const { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage, error } = useInfiniteCardsQuery(
    props.id,
  );
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();
  if (typeof data === 'undefined' || error) return console.log(error, typeof data);
  return (
    <>
      {isOpenModal && (
        <Modal>
          <EditColumn onClose={handleCloseModal} columnId={props.id} columnTitle={props.title} />
        </Modal>
      )}
      <CardListLayout>
        <CardListHeader title={props.title} count={Number(data?.totalCount)} onClick={handleOpenModal} />
        <AddCard />
        {data.pages.map((page) => {
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
      </CardListLayout>
    </>
  );
};

export default CardList;
