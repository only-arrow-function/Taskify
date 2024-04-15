import DomainButtonBase from "./commons/domain-button-base"
import DomainButtonName from "./commons/domain-button-name"

interface Props {
  sizeVariant?: "primary" | "secondary" | "tertiary";
}

const DashboardDeleteButton = ({ sizeVariant }: Props) => {
  return (
    <DomainButtonBase sizeVariant={sizeVariant} purpose='dashboard-delete'>
      <div className="flex items-center justify-center gap-x-3">
        <DomainButtonName purpose='dashboard-delete'>대시보드 삭제하기</DomainButtonName>
      </div>
    </DomainButtonBase>
  )
}

export default DashboardDeleteButton