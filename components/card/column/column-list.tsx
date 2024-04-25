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

  return (
    <>
      {isOpenModal && (
        <Modal>
          <NewColumn onClose={handleCloseModal} data={columnData} />
        </Modal>
      )}
      <ColumnListLayout>
        {columnData?.data?.data &&
          columnData.data.data.map((data) => {
            return <CardList key={data.id} id={data.id} title={data.title} dashboardId={props.id} />;
          })}
        <ColumnAdd onClick={handleOpenModal} />
      </ColumnListLayout>
    </>
  );
};

export default ColumnList;
