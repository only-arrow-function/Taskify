import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import CardList from '@/components/card/card-list';
import ColumnAdd from '@/components/card/column/column-add';
import ColumnListLayout from '@/components/card/column/column-list-layout';
import NewColumn from '@/components/modal/column/new-column';
import Dimmed from '@/components/modal/dimmed';
import ModalLayout from '@/components/modal/modal-layout';
import { useColumnsQuery } from '@/hooks/react-query/use-query-columns';
import { useDetailDashboard } from '@/hooks/react-query/use-query-dashboard';
import { useHandleModal } from '@/hooks/use-handle-modal';

interface ColumnListProps {
  id: string;
}

const ColumnList = (props: ColumnListProps) => {
  const dashboardId = +props.id;
  const { data: columnData } = useColumnsQuery(dashboardId);
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();
  const [cardList, setCardList] = useState([]);
  const [enabled, setEnabled] = useState(false);

  const handleDropCard = ({ source, destination }: DropResult) => {
    if (!destination) return;
    console.log(cardList);
  };

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {isOpenModal && (
        <>
          <Dimmed handleCloseModal={handleCloseModal} />
          <ModalLayout>
            <NewColumn onClose={handleCloseModal} data={columnData} />
          </ModalLayout>
        </>
      )}
      <DragDropContext onDragEnd={handleDropCard}>
        <ColumnListLayout>
          {data?.data &&
            data.data.map((data) => {
              return (
                <Droppable key={data.id} droppableId={data.title}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <CardList id={data.id} title={data.title} dashboardId={props.id} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              );
            })}
          <ColumnAdd onClick={handleOpenModal} />
        </ColumnListLayout>
      </DragDropContext>
    </>
  );
};

export default ColumnList;
