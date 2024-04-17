import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardInvite from '@/components/dashboard/invite/dashboard-invite';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import DashboardButtonList from '@/components/dashboard/list/dashboard-button-list';
import SideMenu from '@/components/side-menu/side-menu';

const MyDashboard = () => {
  return (
    <DashboardSectionLayout>
      <DashboardHeader />
      <DashboardButtonList />
      <DashboardInvite />
      <SideMenu />
    </DashboardSectionLayout>
  );
};

export default MyDashboard;
