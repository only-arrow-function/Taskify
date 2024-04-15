import DomainButtonBase from "./commons/domain-button-base"
import DomainButtonName from "./commons/domain-button-name"
import AddChip from "@/components/chips/add-chip";

interface Props {
  sizeVariant?: "primary" | "secondary" | "tertiary";
}

const NewColumnAddButton = ({ sizeVariant }: Props) => {
  return (
    <DomainButtonBase sizeVariant={sizeVariant} purpose='column-add'>
      <div className="flex items-center justify-center gap-x-3">
        <DomainButtonName purpose='column-add'>새로운 칼럼 추가하기</DomainButtonName>
        <AddChip />
      </div>
    </DomainButtonBase>
  )
}

export default NewColumnAddButton