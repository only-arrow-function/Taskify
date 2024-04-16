import { ReactNode } from 'react';

import Image from 'next/image';

import DashboardBase from './commons/dashboard-base';
import DomainButtonName from './commons/domain-button-name';

import ArrowForwardIcon from '@/public/icon/arrow-forward.svg';
import CrownIcon from '@/public/icon/crown.svg';

interface Props {
  children?: ReactNode;
}

const DashboardOpenButton = ({ children }: Props) => {
  const pseudoBefore = `before:content-[''] before:block before:size-[8px] before:rounded-full before:bg-green-50 mr-3`;

  return (
    <DashboardBase purpose="dashboard">
      <div className="flex justify-between items-center w-full px-5">
        <div className="flex items-center">
          <span className={`${pseudoBefore}`}/>
          <DomainButtonName purpose="dashboard">{children}</DomainButtonName>
          <Image src={CrownIcon} alt="crown" className="ml-1" />
        </div>
        <Image src={ArrowForwardIcon} alt=">" />
      </div>
    </DashboardBase>
  );
};

export default DashboardOpenButton;
