import Image from 'next/image';
import NumberChip from '@/components/chips/number-chip';
import SettingImg from '@/public/icon/settings.svg';

interface CardListHeaderProp {
  title: string;
  count: number;
}

const ColumnHeader = (prop: CardListHeaderProp) => {
  const pseudoBefore = `before:content-[''] before:block before:size-[8px] before:rounded-full before:bg-purple-50 mr-3 sm:ml-0`;
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className={`${pseudoBefore}`}></div>
        <div className="mr-[12px] font-bold text-[18px]">{prop.title}</div>
        <NumberChip>{prop.count}</NumberChip>
      </div>
      <div className="size-[22px] sm:size-[24px]">
        <Image src={SettingImg} alt="setting" />
      </div>
    </div>
  );
};

export default ColumnHeader;
