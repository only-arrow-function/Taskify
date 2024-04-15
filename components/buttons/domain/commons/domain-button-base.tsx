import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  sizeVariant?: "primary" | "secondary" | "tertiary";
  purpose: "column-add" | "dashboard-add" | "dashboard-delete";
}

const DomainButtonBase = ({ children, sizeVariant, purpose }: Props) => {
  const baseClasses = "border border-grayscale-40 rounded-md";
  const bgVariantClasses = purpose === "dashboard-delete" ? "bg-grayscale-20" : "bg-white";

  let sizeVariantClasses;
  switch (sizeVariant) {
    case "primary":
      sizeVariantClasses = "w-[544px]";
      break;
    case "secondary":
      sizeVariantClasses = "w-[354px]";
      break;
    case "tertiary":
      sizeVariantClasses = "";
      break;
  }

  return (
    <button
      className={`${baseClasses} ${sizeVariantClasses} ${bgVariantClasses}`}
    >{children}</button>
  )
}

export default DomainButtonBase