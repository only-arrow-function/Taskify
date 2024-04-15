import DomainButtonBase from "./commons/domain-button-base"
import DomainButtonName from "./commons/domain-button-name"
import AddChip from "@/components/chips/add-chip";

interface Props {
  sizeVariant?: "primary" | "secondary" | "tertiary";
}

const NewDashboardAddButton = ({ sizeVariant }: Props) => {
  return (
    <DomainButtonBase sizeVariant={sizeVariant} purpose='dashboard-add'>
      <div className="flex items-center justify-center gap-x-3">
        <DomainButtonName purpose='dashboard-add'>새로운 대시보드</DomainButtonName>
        <AddChip />
      </div>
    </DomainButtonBase>
  )
}

export default NewDashboardAddButton