import Image from 'next/image';
import { DashBoardProps } from '@/components/side-menu/side-menu-type';
import crownImg from '@/public/icon/crown.svg';

const SideMenuDashBoard = (prop: DashBoardProps) => {
  const colorObj = {
    green: 'before:bg-green-50',
    purple: 'before:bg-purple-50',
    orange: 'before:bg-orange-50',
    blue: 'before:bg-blue-50',
    pink: 'before:bg-pink-50',
  };
  const pseudoBefore = `before:content-[''] before:block before:size-[8px] before:rounded-full ${
    colorObj[prop.color]
  } mr-3 ml-2 sm:ml-0`;

  return (
    <div className="w-full h-[40px] sm:h-[43px] xl:h-[45px] flex items-center rounded-[4px] text-grayscale-60 hover:bg-violet-10 hover:text-grayscale-80">
      <div className={`${pseudoBefore}`}></div>
      <div className="hidden sm:block text-[18px] font-[Pretendard] text-inherit">
        {prop.title}
      </div>
      {prop.createdByMe && (
        <div className="hidden sm:block relative mb-1 ml-1 sm:w-[15px] sm:h-[12px] xl:w-[17px] xl:h-[14px]">
          <Image src={crownImg} alt="crown" fill />
        </div>
      )}
    </div>
  );
};

export default SideMenuDashBoard;
