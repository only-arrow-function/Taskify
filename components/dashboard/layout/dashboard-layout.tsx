import { PropsWithChildren } from 'react';

import DashboardSectionLayout from './dashboard-section-layout';
import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import SideMenu from '@/components/side-menu/side-menu';

const DashboardLayout = ({ dashboardId, children }: PropsWithChildren<{ dashboardId: number }>) => {
  return (
    <DashboardSectionLayout>
      <DashboardHeader dashboardId={dashboardId} />
      <SideMenu />
      <main>{children}</main>
    </DashboardSectionLayout>
  );
};

export default DashboardLayout;
