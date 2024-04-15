import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  sizeVariant?: "primary" | "secondary" | "tertiary";
  purpose: "column-add" | "dashboard-add" | "dashboard-delete";
}

const DomainButtonName = ({ children, sizeVariant, purpose }: Props) => {
  const textBaseClasses = "text-center font-[Pretendard]";

  let textSizeVariantClasses = 'text-lg';
  if (sizeVariant === "tertiary") {
    textSizeVariantClasses = 'text-base'
  }
  
  let textVariantClasses;
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
    <span className={`${textBaseClasses} ${textVariantClasses} ${textSizeVariantClasses}`}>{children}</span>
  )
}

export default DomainButtonName