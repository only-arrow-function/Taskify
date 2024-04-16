import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  purpose: "column-add" | "dashboard" | "dashboard-delete";
}

const DashboardBase = ({ children, purpose }: Props) => {
  const baseClasses = "flex items-center justify-center border border-grayscale-40 rounded-md";
  const bgVariantClasses = purpose === "dashboard-delete" ? "bg-grayscale-20" : "bg-white";
  const responseSizeClasses = "w-full h-[70px] sm:w-[260px] sm:h-[58px]"

  return (
    <button className={`${baseClasses} ${responseSizeClasses} ${bgVariantClasses}`}>
      {children}
    </button>
  )
}

export default DashboardBase
