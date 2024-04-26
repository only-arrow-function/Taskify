import AddCard from '@/components/card/add-card';
import CardListHeader from '@/components/card/card-list-header';
import CardListLayout from '@/components/card/card-list-layout';
import TaskCard from '@/components/card/task-card';
import EditColumn from '@/components/modal/column/edit-column';
import Modal from '@/components/modal/modal';
import { useInfiniteCardsQuery } from '@/hooks/react-query/use-query-cards';
import { useCards } from '@/hooks/swr/card/use-card';
import { useColumns } from '@/hooks/swr/column/use-column';
import { useHandleModal } from '@/hooks/use-handle-modal';

interface CardListProps {
  id: string;
  title: string;
  dashboardId: string | string[] | undefined;
}
const CardList = (props: CardListProps) => {
  //const { data } = useCards(props.id);
  const { data, isSuccess, isPending, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteCardsQuery(props.id);
  // console.log(data);
  const columnList = useColumns(props.dashboardId);
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();

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
        {/* {data &&
          data?.pages.map((data) => {
            return (
              <TaskCard
                key={data.id}
                id={data.id}
                title={data.title}
                dueDate={data.dueDate}
                tags={data.tags}
                assignee={data.assignee}
                imageUrl={data?.imageUrl}
              />
            );
          })} */}
      </CardListLayout>
    </>
  );
};

export default CardList;
