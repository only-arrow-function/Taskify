import { PropsWithChildren } from 'react';

const NumberChip = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center size-[20px] bg-grayscale-30 rounded">
      <span className="font-medium text-xs text-grayscale-60">{children}</span>
    </div>
  );
};

export default NumberChip;
