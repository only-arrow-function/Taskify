import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import InviteModal from '../modal/Invite-modal';
import DashboardHeaderButton from '@/components/dashboard/header/dashboard-header-button';
import DashboardHeaderMembers from '@/components/dashboard/header/dashboard-header-members';
import DashboardHeaderProfile from '@/components/dashboard/header/dashboard-header-profile';
import { useDashboardDetailQuery } from '@/hooks/react-query/use-query-dashboard';
import { useMembersQuery } from '@/hooks/react-query/use-query-members';
import { useHandleDropdown, useHandleDropdownOutside } from '@/hooks/use-handle-dropdown';
import dashboardInviteIcon from '@/public/dashboard/dashboard-invite.svg';
import dashboardSettingIcon from '@/public/dashboard/dashboard-setting-icon.svg';
import { useInviteToggleStore } from '@/store/invite/invite-toggle-store';

const DashboardHeader = ({ dashboardId, page }: { dashboardId?: number; page?: number }) => {
  const router = useRouter();
  const isPathMyDashboard = router.pathname.match('my');
  const { isToggle, handleOpenToggle, handleCloseToggle } = useInviteToggleStore();
  const { isOpenDropdown, handleCloseDropdown, handleToggleDropdown } = useHandleDropdown();
  const dropDownRef = useHandleDropdownOutside(() => '', handleCloseDropdown);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  // server state
  const { data } = useDashboardDetailQuery(dashboardId, page);
  const beforeStyles = isPathMyDashboard
    ? ''
    : 'before:absolute before:w-px before:h-9 before:bg-grayscale-40 before:-left-3 md:before:-left-4 lg:before:-left-8';
  const { data: usersData } = useMembersQuery(dashboardId, 1);

  const users = usersData?.members.map(({ id, nickname, profileImageUrl }) => {
    return { id, nickname, profileImageUrl };
  });
  const usersCount = usersData?.totalCount || 0;

  const handleLogoutClick = () => {
    removeCookie('token');
    router.push('/login');
  };

  return (
    <header className="border-b border-grayscale-40 py-6 w-full">
      <div className="flex justify-between max-[430px]:justify-end sm:justify-between items-center px-4 sm:px-10 lg:pl-10 lg:pr-20">
        <h2 className=" text-xl font-bold max-[430px]:hidden">
          {data ? <Link href="/my-dashboard">{data.title}</Link> : <Link href="/my-dashboard">내 대시보드</Link>}
        </h2>
        <div className="flex items-center">
          {data?.createdByMe && (
            <>
              <div>
                <Link
                  href={{
                    pathname: `/dashboard/${router.query.id}/edit`,
                    query: {
                      page: page,
                    },
                  }}
                >
                  <DashboardHeaderButton imageSource={dashboardSettingIcon.src}>관리</DashboardHeaderButton>
                </Link>
              </div>
              <div className="ml-4">
                <DashboardHeaderButton imageSource={dashboardInviteIcon.src} onClick={handleOpenToggle}>
                  초대하기
                </DashboardHeaderButton>
              </div>
            </>
          )}
          {users && (
            <div className="hidden ml-10 md:ml-6 lg:block lg:ml-10">
              <DashboardHeaderMembers users={users} totalCount={usersCount} />
            </div>
          )}
          <div ref={dropDownRef} className={`ml-7 md:ml-8 lg:ml-16 relative ${beforeStyles}`}>
            <DashboardHeaderProfile onClick={handleToggleDropdown} />
            {isOpenDropdown && (
              <ul className="absolute top-9 right-1 z-50 p-[10px] bg-white border border-grayscale-40 rounded-md shadow-popover w-[90px] md:right-11 md:w-[100px]">
                <Link href={'/mypage'}>
                  <li className="leading-[30px] w-full pl-[5px] rounded-[4px] text-xs text-left md:leading-[32px] md:text-sm hover:bg-violet-10 hover:text-violet-50">
                    내 프로필
                  </li>
                </Link>
                <Link href={'/my-dashboard'}>
                  <li className="leading-[30px] w-full pl-[5px] rounded-[4px] text-xs text-left md:leading-[32px] md:text-sm hover:bg-violet-10 hover:text-violet-50">
                    내 대시보드
                  </li>
                </Link>
                <li
                  onClick={handleLogoutClick}
                  className="leading-[30px] cursor-pointer w-full pl-[5px] rounded-[4px] text-xs text-left md:leading-[32px] md:text-sm hover:bg-violet-10 hover:text-violet-50"
                >
                  로그아웃
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {isToggle && (
        <InviteModal handleCloseModal={handleCloseToggle} dashboardId={dashboardId} totalPages={data?.totalPages} />
      )}
    </header>
  );
};

export default DashboardHeader;
