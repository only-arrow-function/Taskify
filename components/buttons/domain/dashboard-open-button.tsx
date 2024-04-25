import { PropsWithChildren } from 'react';

import Image from 'next/image';

import DashboardBase from './commons/dashboard-base';
import DomainButtonName from './commons/domain-button-name';

import {
  dashboardColors,
  DashboardColors,
} from '@/components/dashboard/dashboard.constants';
import ArrowForwardIcon from '@/public/icon/arrow-forward.svg';
import CrownIcon from '@/public/icon/crown.svg';

const DashboardOpenButton = ({
  children,
  color,
}: PropsWithChildren<{ color: DashboardColors }>) => {
  const pseudoBefore = `before:content-[''] before:block before:size-[8px] before:rounded-full  ${dashboardColors[color]} mr-3`;

  return (
    <DashboardBase purpose="dashboard">
      <div className="flex justify-between items-center w-full px-5">
        <div className="flex items-center">
          <span className={`${pseudoBefore}`} />
          <DomainButtonName purpose="dashboard">{children}</DomainButtonName>
          <Image src={CrownIcon} alt="crown" className="ml-1" />
        </div>
        <Image src={ArrowForwardIcon} alt=">" />
      </div>
    </DashboardBase>
  );
};

export default DashboardOpenButton;
