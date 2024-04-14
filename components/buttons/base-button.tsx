import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  sizeVariant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  purpose: 'positive' | 'negative';
}

const BaseButton = ({ children, sizeVariant, purpose }: Props) => {
  // style
  const baseClasses = "flex items-center justify-center gap-10px flex-shrink-0 rounded";
  const textBaseClasses = 'text-center font-[Pretendard] text-lg font-medium leading-normal';

  let sizeVariantClasses;
  let textSizeVariantClasses = 'text-sm';
  switch (sizeVariant) {
    case 'primary':
      sizeVariantClasses = 'w-[109px] px-[37px] py-[7px]'; 
      textSizeVariantClasses = 'text-xs';
      break;
    case 'secondary':
      sizeVariantClasses = 'w-[85px] h-[32px] px-[29px] py-[6px]'; 
      break;
    case 'tertiary':
      sizeVariantClasses = 'w-[73px] h-[30px] px-[23px] py-[6px]'; 
      break;
    case 'quaternary':
      sizeVariantClasses = 'w-[52px] px-[9px] py-[7px]'; 
      break;
  }

  const bgVariantClasses = purpose === 'positive' ? 'bg-violet-50' : 'bg-white border border-grayscale-40';
  const textVariantClasses = purpose === 'positive' ? 'text-white' : 'text-violet-50';

  return (
    <button className={`${baseClasses} ${sizeVariantClasses} ${bgVariantClasses}`}>
      <span className={`${textBaseClasses} ${textVariantClasses} ${textSizeVariantClasses}`}>{children}</span>
    </button>
  )
}

export default BaseButton
