import Image from 'next/image';
import { DashBoardProps } from '@/components/side-menu/side-menu-type';
import crownImg from '@/public/icon/crown.svg';

const SideMenuDashBoard = (prop: DashBoardProps) => {
  let propColor: string;
  switch (prop.color) {
    case 'green':
      propColor = 'before:bg-green-50';
      break;
    case 'purple':
      propColor = 'before:bg-purple-50';
      break;
    case 'orange':
      propColor = 'before:bg-orange-50';
      break;
    case 'blue':
      propColor = 'before:bg-blue-50';
      break;
    case 'pink':
      propColor = 'before:bg-pink-50';
      break;
  }
  const pseudoBefore = `before:content-[''] before:block before:size-[8px] before:rounded-full ${propColor} mr-3 ml-2 sm:ml-0`;

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
