import DashboardBase from './commons/dashboard-base';
import DomainButtonName from './commons/domain-button-name';
import { useDeleteDashboard } from '@/hooks/react-query/use-query-dashboard';

const DashboardDeleteButton = ({ dashboardId }: { dashboardId: number }) => {
  const { mutate } = useDeleteDashboard(dashboardId);

  return (
    <DashboardBase purpose="dashboard-delete">
      <div className="flex items-center justify-center gap-x-3">
        <DomainButtonName purpose="dashboard-delete" onClickDelete={mutate}>
          대시보드 삭제하기
        </DomainButtonName>
      </div>
    </DashboardBase>
  );
};

export default DashboardDeleteButton;
