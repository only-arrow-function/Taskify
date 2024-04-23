import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import SideMenu from '@/components/side-menu/side-menu';
import { useAuthenticationStore } from '@/store/auth';

export default function index() {
  const nickname = useAuthenticationStore((state) => state.nickname);
  const profileImage = useAuthenticationStore((state) => state.profileImageUrl);

  console.log(nickname, profileImage);

  return (
    <DashboardSectionLayout>
      <DashboardHeader />
      <SideMenu />
    </DashboardSectionLayout>
  );
}
