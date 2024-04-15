import DashboardBase from "./commons/dashboard-base";
import DomainButtonName from "./commons/domain-button-name"
import AddChip from "@/components/chips/add-chip";

const NewDashboardAddButton = () => {
  return (
    <DashboardBase purpose='dashboard'>
      <div className='flex items-center justify-center gap-x-3'>
        <DomainButtonName purpose='dashboard'>새로운 대시보드</DomainButtonName>
        <AddChip />
      </div>
    </DashboardBase>
  )
}

export default NewDashboardAddButton