import { GetStaticProps } from 'next';
import requests from '@/apis/request';
import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardInvite from '@/components/dashboard/invite/dashboard-invite';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import DashboardList from '@/components/dashboard/list/dashboard-list';
import SideMenu from '@/components/side-menu/side-menu';
import { DashboardResponse } from '@/hooks/swr/dashboard/use-dashboards';
import { useAuthenticationStore } from '@/store/auth';

const MyDashboard = () => {
  const nickname = useAuthenticationStore((state) => state.nickname);
  const profileImage = useAuthenticationStore((state) => state.profileImageUrl);

  console.log(nickname, profileImage);

  return (
    <DashboardSectionLayout>
      <DashboardHeader />
      <DashboardList />
      <DashboardInvite />
      <SideMenu />
    </DashboardSectionLayout>
  );
};

export default MyDashboard;
