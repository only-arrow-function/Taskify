import { PropsWithChildren } from 'react';

type Color = 'green' | 'purple' | 'orange' | 'blue' | 'pink';

interface Colors {
  color: string;
  bgColor: string;
}

const tagColorConfig: Record<Color, Colors> = {
  green: {
    color: 'text-green-50',
    bgColor: 'bg-green-10',
  },
  purple: {
    color: 'text-purple-50',
    bgColor: 'bg-purple-10',
  },
  orange: {
    color: 'text-orange-50',
    bgColor: 'bg-orange-10',
  },
  blue: {
    color: 'text-blue-50',
    bgColor: 'bg-blue-10',
  },
  pink: {
    color: 'text-pink-50',
    bgColor: 'bg-pink-10',
  },
};

const TagChip = ({ children, color }: PropsWithChildren<{ color: Color }>) => {
  return (
    <span
      className={`px-[8px] py-[4px] text-[10px] rounded-[4px] ${tagColorConfig[color].color} ${tagColorConfig[color].bgColor} md:text-xs`}
    >
      {children}
    </span>
  );
};

export default TagChip;
