import Image from 'next/image';
import DashboardInviteItem from './dashboard-invite-item';
import DashboardInviteSearch from './dashboard-invite-search';
import CommentSpinner from '@/components/modal/todo/comment-spinner';
import { useInvitedDashboard } from '@/hooks/react-query/use-query-invited-dashboard';
import useIntersect from '@/hooks/use-intersect';
import NoEmailIcon from '@/public/icon/no-email.svg';

const DashboardInviteTable = ({ searchTitle }: { searchTitle?: string }) => {
  const { data, hasNextPage, fetchNextPage } = useInvitedDashboard(searchTitle);
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  if (!data) return null;
  const invitations = data.map((invitationsData) => invitationsData.invitations).flat();

  return (
    <div>
      {!invitations.length ? (
        <div className="flex flex-col items-center w-full pb-36 pt-24 sm:pb-32 sm:pt-17">
          <Image src={NoEmailIcon} alt="빈 이메일" />
          <span className="text-grayscale-40">아직 초대받은 대시보드가 없어요</span>
        </div>
      ) : (
        <>
          <DashboardInviteSearch />
          <div className="hidden md:flex text-grayscale-50">
            <span className="md:w-[36%]">이름</span>
            <span className="md:w-[30%]">초대자</span>
            <span className="md:w-[34%]">수락 여부</span>
          </div>
          <ul className="h-[460px] text-sm sm:text-base overflow-y-auto">
            {invitations.map(({ id, dashboard, inviter }) => (
              <DashboardInviteItem key={id} id={id} dashboardTitle={dashboard.title} inviterName={inviter.nickname} />
            ))}
            {hasNextPage && (
              <li ref={ref}>
                <CommentSpinner />
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default DashboardInviteTable;
