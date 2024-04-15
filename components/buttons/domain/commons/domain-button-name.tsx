import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  purpose: "column-add" | "dashboard" | "dashboard-delete";
}

const DomainButtonName = ({ children, purpose }: Props) => {
  const textBaseClasses = "text-center font-[Pretendard]";
  const textSizeVariantClasses = 'text-lg sm:text-base';
  
  let textVariantClasses;
  switch (purpose) {
    case "column-add":
      textVariantClasses = "font-bold";
      break;
    case "dashboard":
      textVariantClasses = "font-semibold";
      break;
    case "dashboard-delete":
      textVariantClasses = "font-medium";
      break;
  }

  return (
    <span className={`${textBaseClasses} ${textVariantClasses} ${textSizeVariantClasses}`}>{children}</span>
  )
}

export default DomainButtonName