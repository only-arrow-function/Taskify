import DomainButtonBase from "./commons/domain-button-base"
import AddChip from "@/components/chips/add-chip";

interface Props {
  sizeVariant?: "primary" | "secondary" | "tertiary";
}

const ColumnAddButton = ({ sizeVariant }: Props) => {
  return (
    <DomainButtonBase sizeVariant={sizeVariant} purpose='column-add'>
      <div className="flex items-center justify-center gap-x-3">
        <AddChip />
      </div>
    </DomainButtonBase>
  )
}

export default ColumnAddButton