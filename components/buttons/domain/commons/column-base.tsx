import { PropsWithChildren } from 'react';

const ColumnBase = ({ children }: PropsWithChildren) => {
  const baseClasses = "flex items-center justify-center border border-grayscale-40 rounded-md bg-white";
  const responseSizeClasses = "w-full sm:w-[354px]"

  return (
    <button className={`${baseClasses} ${responseSizeClasses}`}>
      {children}
    </button>
  )
}

export default ColumnBase