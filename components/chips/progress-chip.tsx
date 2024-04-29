import { PropsWithChildren } from 'react';

const ProgressChip = ({ children }: PropsWithChildren) => {
  const pseudoBefore = `before:content-[''] before:block before:size-[6px] before:rounded-full before:bg-violet-50`;

  return (
    <span
      className={`inline-flex items-center gap-[6px] px-[8px] py-[4px] text-[10px] text-violet-50 rounded-[11px] bg-violet-10 sm:text-xs ${pseudoBefore}`}
    >
      {children}
    </span>
  );
};

export default ProgressChip;
