import { PropsWithChildren } from 'react';

import DashboardSectionLayout from './dashboard-section-layout';
import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import SideMenu from '@/components/side-menu/side-menu';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <DashboardSectionLayout>
      <DashboardHeader />
      <SideMenu />
      <main>{children}</main>
    </DashboardSectionLayout>
  )
}

export default Layout