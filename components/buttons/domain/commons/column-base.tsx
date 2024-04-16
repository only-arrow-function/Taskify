import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const ColumnBase = ({ children }: Props) => {
  const baseClasses = "flex items-center justify-center border border-grayscale-40 rounded-md bg-white";
  const responseSizeClasses = "w-full sm:w-[354px]"

  return (
    <button className={`${baseClasses} ${responseSizeClasses}`}>
      {children}
    </button>
  )
}

export default ColumnBase