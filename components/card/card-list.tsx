import { Draggable } from 'react-beautiful-dnd';
import AddCard from '@/components/card/add-card';
import CardListHeader from '@/components/card/card-list-header';
import CardListLayout from '@/components/card/card-list-layout';
import TaskCard from '@/components/card/task-card';
import EditColumn from '@/components/modal/column/edit-column';
import Modal from '@/components/modal/modal';
import { useCards } from '@/hooks/swr/card/use-card';
import { useColumns } from '@/hooks/swr/column/use-column';
import { useHandleModal } from '@/hooks/use-handle-modal';

interface CardListProps {
  id: string;
  title: string;
  dashboardId: string | string[] | undefined;
}
const CardList = (props: CardListProps) => {
  const { data } = useCards(props.id);
  const columnList = useColumns(props.dashboardId);
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();
  console.log(data);
  return (
    <>
      {isOpenModal && (
        <Modal>
          <EditColumn onClose={handleCloseModal} data={columnList} columnId={props.id} columnTitle={props.title} />
        </Modal>
      )}
      <CardListLayout>
        <CardListHeader title={props.title} count={Number(data?.totalCount)} onClick={handleOpenModal} />
        <AddCard />
        {data?.cards &&
          data?.cards.map((data, idx) => {
            return (
              <Draggable key={data.id} draggableId={String(data.id)} index={idx}>
                {(provided, snapshot) => {
                  return (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <TaskCard
                        id={data.id}
                        title={data.title}
                        dueDate={data.dueDate}
                        tags={data.tags}
                        assignee={data.assignee}
                        imageUrl={data?.imageUrl}
                      />
                    </div>
                  );
                }}
              </Draggable>
            );
          })}
      </CardListLayout>
    </>
  );
};

export default CardList;
