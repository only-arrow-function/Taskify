import DashboardInviteItem from './dashboard-invite-item';
import CommentSpinner from '@/components/modal/todo/comment-spinner';
import { useInvitedDashboard } from '@/hooks/react-query/use-query-invited-dashboard';
import useIntersect from '@/hooks/use-intersect';

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
    </div>
  );
};

export default DashboardInviteTable;
