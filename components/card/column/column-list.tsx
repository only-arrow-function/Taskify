import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import CardList from '@/components/card/card-list';
import ColumnAdd from '@/components/card/column/column-add';
import ColumnListLayout from '@/components/card/column/column-list-layout';
import NewColumn from '@/components/modal/column/new-column';
import Modal from '@/components/modal/modal';
import { useColumns } from '@/hooks/swr/column/use-column';
import { useHandleModal } from '@/hooks/use-handle-modal';

interface ColumnListProps {
  id: string | string[] | undefined;
}

const ColumnList = (props: ColumnListProps) => {
  const columnData = useColumns(props.id);
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
        <Modal>
          <NewColumn onClose={handleCloseModal} data={columnData} />
        </Modal>
      )}
      <DragDropContext onDragEnd={handleDropCard}>
        <ColumnListLayout>
          {columnData?.data?.data &&
            columnData.data.data.map((data) => {
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
