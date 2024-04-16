import { PropsWithChildren } from 'react';
import { tagColorConfig } from '@/constants/chips';
import { Color } from '@/types/color';

const TagChip = ({ children, color }: PropsWithChildren<{ color: Color }>) => {
  return (
    <span
      className={`px-[8px] py-[4px] text-[10px] rounded-[4px] ${tagColorConfig[color].color} ${tagColorConfig[color].bgColor} sm:text-xs`}
    >
      {children}
    </span>
  );
};

export default TagChip;
