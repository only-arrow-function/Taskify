import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import CardList from '@/components/card/card-list';
import { TaskCardProp } from '@/components/card/card-type';
import ColumnAdd from '@/components/card/column/column-add';
import ColumnListLayout from '@/components/card/column/column-list-layout';
import { ColumnItem } from '@/components/modal/column/columns-data.type';
import NewColumn from '@/components/modal/column/new-column';
import Dimmed from '@/components/modal/dimmed';
import ModalLayout from '@/components/modal/modal-layout';
import { useUpdateCard } from '@/hooks/react-query/use-query-cards';
import { useColumnsQuery } from '@/hooks/react-query/use-query-columns';
import { useHandleModal } from '@/hooks/use-handle-modal';

interface ColumnListProps {
  id: number;
  page?: number;
}

const ColumnList = (props: ColumnListProps) => {
  const dashboardId = +props.id;
  const { data: columnData, isLoading, isError } = useColumnsQuery(dashboardId);
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();

  const [cardInfo, setCardInfo] = useState<TaskCardProp>();

  const [enabled, setEnabled] = useState(false);
  const updateCardListMutation = useUpdateCard(columnData?.data as ColumnItem[]);

  const handleSelectItem = (card: TaskCardProp) => {
    setCardInfo(card);
  };

  const handleDropCard = async ({ source, destination }: DropResult) => {
    if (!destination || !cardInfo) return;

    let data;

    if (cardInfo.imageUrl) {
      data = {
        id: cardInfo.id,
        data: {
          assigneeUserId: cardInfo.assignee.id,
          columnId: +destination!.droppableId,
          title: cardInfo.title,
          description: cardInfo.description,
          dueDate: cardInfo.dueDate,
          tags: cardInfo.tags,
          imageUrl: cardInfo.imageUrl,
        },
      };
    } else {
      data = {
        id: cardInfo.id,
        data: {
          assigneeUserId: cardInfo.assignee.id,
          columnId: +destination!.droppableId,
          title: cardInfo.title,
          description: cardInfo.description,
          dueDate: cardInfo.dueDate,
          tags: cardInfo.tags,
        },
      };
    }
    await updateCardListMutation.mutateAsync(data);
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
          {columnData?.data &&
            columnData.data.map((data) => {
              return (
                <Droppable key={data.id} droppableId={String(data.id)}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <CardList columnData={data} dashboardId={props.id} onSelectItem={handleSelectItem} />
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
