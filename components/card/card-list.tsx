import { ColumnItem } from '../modal/column/columns-data.type';
import AddCard from '@/components/card/add-card';
import CardListHeader from '@/components/card/card-list-header';
import CardListLayout from '@/components/card/card-list-layout';
import TaskCard from '@/components/card/task-card';
import EditColumn from '@/components/modal/column/edit-column';
import Modal from '@/components/modal/modal';
import { useInfiniteCardsQuery } from '@/hooks/react-query/use-query-cards';
//import { useCards } from '@/hooks/swr/card/use-card';
import { useHandleModal } from '@/hooks/use-handle-modal';

interface CardListProps {
  columnData: ColumnItem;
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
  } = useInfiniteCardsQuery(props.columnData.id);

  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();

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
        {cardsData?.pages[0].cards.map((data: any) => (
          <TaskCard
            key={data.id}
            id={data.id}
            title={data.title}
            dueDate={data.dueDate}
            tags={data.tags}
            assignee={data.assignee}
            imageUrl={data?.imageUrl}
            columnData={props.columnData}
          />
        ))}
      </CardListLayout>
    </>
  );
};

export default CardList;
