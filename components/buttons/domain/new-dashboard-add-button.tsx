import DashboardBase from './commons/dashboard-base';
import DomainButtonName from './commons/domain-button-name';
import AddChip from '@/components/chips/add-chip';
import { useToggleStore } from '@/store/toggle-store';

const NewDashboardAddButton = () => {
  const handleOpenToggle = useToggleStore((state) => state.handleOpenToggle);

  return (
    <DashboardBase purpose="dashboard" onOpenModal={handleOpenToggle}>
      <div className="flex items-center justify-center gap-x-3">
        <DomainButtonName purpose="dashboard">새로운 대시보드</DomainButtonName>
        <AddChip />
      </div>
    </DashboardBase>
  );
};

export default NewDashboardAddButton;
