import Image from 'next/image';
import CheckIcon from '@/public/chips/check.svg';

type Color = 'green' | 'purple' | 'orange' | 'blue' | 'pink';

const colorConfig: Record<Color, string> = {
  green: 'bg-green-50',
  purple: 'bg-purple-50',
  orange: 'bg-orange-50',
  blue: 'bg-blue-50',
  pink: 'bg-pink-50',
};

const ColorChip = ({ color, checked }: { color: Color; checked?: boolean }) => {
  return (
    <div className="relative size-[28px] md:size-[30px]">
      <div className={`size-full rounded-full ${colorConfig[color]}`}></div>
      {checked && (
        <Image
          src={CheckIcon}
          alt="선택됨"
          className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] size-[22px] md:size-[24px]"
        />
      )}
    </div>
  );
};

export default ColorChip;
