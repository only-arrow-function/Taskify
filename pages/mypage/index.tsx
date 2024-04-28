import React from 'react';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import MypageHeader from '@/components/mypage/header/header';
import Management from '@/components/mypage/management/management';
import SideMenu from '@/components/side-menu/side-menu';

const Mypage = () => {
  return (
    <DashboardSectionLayout>
      <MypageHeader />
      <SideMenu />
      <Management />
    </DashboardSectionLayout>
  );
};

export default Mypage;
