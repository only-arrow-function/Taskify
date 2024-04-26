import CardList from '@/components/card/card-list';
import ColumnAdd from '@/components/card/column/column-add';
import ColumnListLayout from '@/components/card/column/column-list-layout';
import NewColumn from '@/components/modal/column/new-column';
import Dimmed from '@/components/modal/dimmed';
import ModalLayout from '@/components/modal/modal-layout';
import { useDetailDashboard } from '@/hooks/react-query/use-query-dashboard';
import { useColumns } from '@/hooks/swr/column/use-column';
import { useHandleModal } from '@/hooks/use-handle-modal';

interface ColumnListProps {
  id: string;
}

const ColumnList = (props: ColumnListProps) => {
  const dashboardId = +props.id;
  const columnData = useColumns(dashboardId);
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();
  const dashboardsQuery = useDetailDashboard(dashboardId);

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
      <ColumnListLayout>
        {columnData?.data?.data &&
          columnData.data.data.map((data) => {
            return <CardList key={data.id} columnId={data.id} title={data.title} dashboardId={dashboardId} />;
          })}
        <ColumnAdd onClick={handleOpenModal} />
      </ColumnListLayout>
    </>
  );
};

export default ColumnList;
