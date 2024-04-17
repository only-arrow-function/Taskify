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
    <header className="w-full border-b border-grayscale-40 py-6 max-[744px]:pr-3 max-[744px]:py-4">
      <div className="ml-[17.5vw] mr-[4.167vw] flex justify-between items-center max-md:justify-end max-[744px]:w-full max-[744px]:ml-0">
        <h2 className="text-xl font-bold max-md:hidden">
          <Link href="/dashboard/my">내 대시보드</Link>
        </h2>

        <div className="flex items-center">
          <div>
            <DashboardHeaderButton imageSource={dashboardSettingIcon.src}>
              관리
            </DashboardHeaderButton>
          </div>
          <div className="ml-4">
            <DashboardHeaderButton imageSource={dashboardInviteIcon.src}>
              초대하기
            </DashboardHeaderButton>
          </div>
          <div className="ml-10 max-[880px]:hidden md:ml-6 lg:ml-10">
            <DashboardHeaderMembers
              users={[
                '윤아영',
                '노은수',
                '김재성',
                '구승모',
                '동현이',
                '이은수',
              ]}
            />
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
