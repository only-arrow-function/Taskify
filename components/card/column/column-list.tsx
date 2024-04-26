import CardList from '@/components/card/card-list';
import ColumnAdd from '@/components/card/column/column-add';
import ColumnListLayout from '@/components/card/column/column-list-layout';
import NewColumn from '@/components/modal/column/new-column';
import Dimmed from '@/components/modal/dimmed';
import ModalLayout from '@/components/modal/modal-layout';

import { useColumnsQuery } from '@/hooks/react-query/use-query-columns';
import { useHandleModal } from '@/hooks/use-handle-modal';

interface ColumnListProps {
  id: string | string[] | undefined;
}

const ColumnList = (props: ColumnListProps) => {
  const { data } = useColumnsQuery(Number(props.id));
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();

  return (
    <>
      {isOpenModal && (
        <>
          <Dimmed handleCloseModal={handleCloseModal} />
          <ModalLayout>
            <NewColumn onClose={handleCloseModal} data={data} />
          </ModalLayout>
        </>
      )}
      <ColumnListLayout>
        {data?.data &&
          data.data.map((data: any) => {
            return <CardList key={data.id} id={data.id} title={data.title} dashboardId={props.id} />;
          })}
        <ColumnAdd onClick={handleOpenModal} />
      </ColumnListLayout>
    </>
  );
};

export default ColumnList;
