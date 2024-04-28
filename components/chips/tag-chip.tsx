import type { Color } from '@/components/chips/color.type';
import { tagColorConfig } from '@/components/chips/color-constants';

const TagChip = ({ tag }: { tag: string }) => {
  const [name, colorString] = tag.split('$');
  const color = (colorString as Color) || 'green';

  return (
    <li
      className={`flex-shrink-0 px-[8px] py-[4px] text-[10px] rounded-[4px] ${tagColorConfig[color].color} ${tagColorConfig[color].bgColor} sm:text-xs list-none`}
    >
      {name}
    </li>
  );
};

export default TagChip;
