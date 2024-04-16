import DashboardHeaderButton from './dashboard-header-button';
import DashboardHeaderMembers from './dashboard-header-members';
import DashboardHeaderProfile from './dashboard-header-profile';
import dashboardInviteIcon from '@/public/dashboard/dashboard-invite.svg';
import dashboardSettingIcon from '@/public/dashboard/dashboard-setting-icon.svg';

const DashboardHeader = () => {
  return (
    <header className="w-full border border-grayscale-40">
      <div className="ml-[17.5vw] mr-[4.167vw] py-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">내 대시보드</h2>

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
          <div className="ml-10">
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
          <div className="ml-16 relative before:absolute before:w-px before:h-9 before:bg-grayscale-40 before:-left-8">
            <DashboardHeaderProfile username="동현이" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
