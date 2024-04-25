import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import SideMenu from '@/components/side-menu/side-menu';

export default function index() {
  return (
    <DashboardSectionLayout>
      <DashboardHeader />
      <SideMenu />
    </DashboardSectionLayout>
  );
}
