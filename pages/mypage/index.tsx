import React from 'react';
import AuthHOC from '@/auth/auth-hoc';
import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
//import MypageHeader from '@/components/mypage/header/header';
import Management from '@/components/mypage/management/management';
import SideMenu from '@/components/side-menu/side-menu';

const Mypage = () => {
  return (
    <DashboardSectionLayout>
      <SideMenu page={1}/>
      <div className='flex-col w-full'>
        <DashboardHeader />
        <Management />
      </div>
    </DashboardSectionLayout>
  );
};

export default AuthHOC(Mypage);
