import Image from 'next/image';
import { backgroundColorConfig } from '@/constants/chips';
import CheckIcon from '@/public/chips/check.svg';
import { Color } from '@/types/color';

const ColorChip = ({ color, checked }: { color: Color; checked?: boolean }) => {
  return (
    <div className="relative size-[28px] md:size-[30px]">
      <div
        className={`size-full rounded-full ${backgroundColorConfig[color]}`}
      />
      {checked && (
        <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] size-[22px] md:size-[24px]">
          <Image src={CheckIcon} alt="선택됨" fill />
        </div>
      )}
    </div>
  );
};

export default ColorChip;
