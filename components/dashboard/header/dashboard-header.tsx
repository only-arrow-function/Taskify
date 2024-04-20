import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardHeaderButton from '@/components/dashboard/header/dashboard-header-button';
import DashboardHeaderMembers from '@/components/dashboard/header/dashboard-header-members';
import DashboardHeaderProfile from '@/components/dashboard/header/dashboard-header-profile';
import dashboardInviteIcon from '@/public/dashboard/dashboard-invite.svg';
import dashboardSettingIcon from '@/public/dashboard/dashboard-setting-icon.svg';

const DashboardHeader = () => {
  const router = useRouter();
  const isPathMyDashboard = router.pathname.match('my');
  const beforeStyles = isPathMyDashboard
    ? ''
    : 'before:absolute before:w-px before:h-9 before:bg-grayscale-40 before:-left-3 md:before:-left-4 lg:before:-left-8';

  return (
    <header className="border-b border-grayscale-40 py-6">
      <div className="flex justify-between max-[430px]:justify-end sm:justify-between items-center px-4 sm:px-10 lg:pl-10 lg:pr-20">
        <h2 className=" text-xl font-bold max-[430px]:hidden">
          <Link href="/my-dashboard">내 대시보드</Link>
        </h2>

        <div className="flex items-center">
          <div>
            <Link href="dashboard/edit">
              <DashboardHeaderButton imageSource={dashboardSettingIcon.src}>관리</DashboardHeaderButton>
            </Link>
          </div>
          <div className="ml-4">
            <DashboardHeaderButton imageSource={dashboardInviteIcon.src}>초대하기</DashboardHeaderButton>
          </div>
          <div className="hidden ml-10 md:ml-6 lg:block lg:ml-10">
            <DashboardHeaderMembers users={['윤아영', '노은수', '김재성', '구승모', '동현이', '이은수']} />
          </div>
          <div className={`ml-7 md:ml-8 lg:ml-16 relative ${beforeStyles}`}>
            <DashboardHeaderProfile username="동현이" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
