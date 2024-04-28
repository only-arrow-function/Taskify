import Image from 'next/image';
import Link from 'next/link';

import { dashboardColors } from '../dashboard/dashboard.constants';
import { DashBoardProps } from '@/components/side-menu/side-menu-type';
import crownImg from '@/public/icon/crown.svg';

const SideMenuDashBoard = (prop: DashBoardProps) => {
  const pseudoBefore = `before:content-[''] before:block before:size-[8px] before:rounded-full ${
    dashboardColors[prop.color]
  } mr-3 ml-2 sm:ml-0`;

  return (
    <Link href={{pathname: `/dashboard/${prop.id}`, 
      query: {page: prop.page}
    }} className='w-full h-[40px] sm:h-[43px] xl:h-[45px] flex items-center rounded-[4px] text-grayscale-60 hover:bg-violet-10 hover:text-grayscale-80'
    >
        <div className={`${pseudoBefore}`}></div>
        <div className="hidden sm:block text-[18px] text-inherit">{prop.title}</div>
        {prop.createdByMe && (
          <div className="hidden sm:block relative mb-1 ml-1 sm:w-[15px] sm:h-[12px] xl:w-[17px] xl:h-[14px]">
            <Image src={crownImg} alt="crown" fill />
          </div>
        )}
    </Link>
  );
};

export default SideMenuDashBoard;
