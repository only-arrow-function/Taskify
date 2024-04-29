import Image from 'next/image';
import NumberChip from '@/components/chips/number-chip';
import SettingImg from '@/public/icon/settings.svg';

interface CardListHeaderProp {
  title: string;
  count: number;
  onClick: () => void;
}

const CardListHeader = (prop: CardListHeaderProp) => {
  const pseudoBefore = `before:content-[''] before:block before:size-[8px] before:rounded-full before:bg-purple-50 mr-3 sm:ml-0`;
  const handleIconClick = () => {
    prop.onClick();
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className={`${pseudoBefore}`} />
        <div className="mr-[12px] font-bold text-[18px]">{prop.title}</div>
        <NumberChip>{prop.count}</NumberChip>
      </div>
      <button className="size-[22px] sm:size-[24px]" onClick={handleIconClick}>
        <Image src={SettingImg} alt="setting" />
      </button>
    </div>
  );
};

export default CardListHeader;
