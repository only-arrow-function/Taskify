import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardInvite from '@/components/dashboard/invite/dashboard-invite';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import SideMenu from '@/components/side-menu/side-menu';

const MyDashboard = () => {
  return (
    <DashboardSectionLayout>
      <DashboardHeader />
      <DashboardInvite />
      <SideMenu />
    </DashboardSectionLayout>
  );
};

export default MyDashboard;
