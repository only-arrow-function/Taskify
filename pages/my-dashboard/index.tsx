import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardInvite from '@/components/dashboard/invite/dashboard-invite';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import DashboardList from '@/components/dashboard/list/dashboard-list';
import DashboardListFetcher from '@/components/dashboard/list/dashboard-list-fetcher';
import SideMenu from '@/components/side-menu/side-menu';

const MyDashboard = () => {
  return (
    <DashboardSectionLayout>
      <DashboardHeader />
      <DashboardListFetcher>
        <DashboardList />
      </DashboardListFetcher>
      <DashboardInvite />
      <SideMenu />
    </DashboardSectionLayout>
  );
};

export default MyDashboard;
