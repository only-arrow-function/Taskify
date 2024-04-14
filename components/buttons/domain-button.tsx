import { ReactNode } from "react";

import AddChip from "../chips/add-chip";

interface Props {
  children?: ReactNode;
  sizeVariant?: "primary" | "secondary" | "tertiary";
  purpose: "column-add" | "dashboard-add" | "dashboard-delete";
}

const DomainButton = ({ children, sizeVariant, purpose }: Props) => {
  // style
  const baseClasses = "border border-grayscale-40 rounded-md";
  const textBaseClasses = "text-center font-[Pretendard]";
  const bgVariantClasses =
    purpose === "dashboard-delete" ? "bg-grayscale-20" : "bg-white";

  let sizeVariantClasses;
  let textVariantClasses;
  let textSizeVariantClasses = 'text-lg';

  switch (sizeVariant) {
    case "primary":
      sizeVariantClasses = "w-[544px] h-[70px]";
      break;
    case "secondary":
      sizeVariantClasses = "w-[354px] h-[70px] px-[29px] py-[6px]";
      break;
    case "tertiary":
      sizeVariantClasses = "px-[60px] py-[20px]";
      textSizeVariantClasses = 'text-base'
      break;
  }

  switch (purpose) {
    case "column-add":
      textVariantClasses = "font-bold";
      break;
    case "dashboard-add":
      textVariantClasses = "font-semibold";
      break;
    case "dashboard-delete":
      textVariantClasses = "font-medium";
      break;
  }

  return (
    <button
      className={`${baseClasses} ${sizeVariantClasses} ${bgVariantClasses}`}
    >
      <div className="flex items-center justify-center gap-x-3">
        {children && (
          <span className={`${textBaseClasses} ${textVariantClasses} ${textSizeVariantClasses}`}>
            {children}
          </span>
        )}
        {purpose === "dashboard-delete" || <AddChip />}
      </div>
    </button>
  );
};

export default DomainButton;
