import { useQueryClient } from '@tanstack/react-query';
import DashboardBase from './commons/dashboard-base';
import DomainButtonName from './commons/domain-button-name';
import DashboardDeleteModal from '@/components/dashboard/modal/dashboard-delete-modal';
import { useHandleModal } from '@/hooks/use-handle-modal';

const DashboardDeleteButton = ({dashboardId, page}: {dashboardId: number, page: number}) => {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();

  return (
    <>
    <DashboardBase purpose="dashboard-delete" onOpenModal={handleOpenModal}>
      <div className='flex items-center justify-center gap-x-3'>
        <DomainButtonName purpose="dashboard-delete">
          대시보드 삭제하기
        </DomainButtonName>
      </div>
    </DashboardBase>
    {isOpenModal && <DashboardDeleteModal handleCloseModal={handleCloseModal} dashboardId={dashboardId} page={page}/>}
    </>
  );
};

export default DashboardDeleteButton;
