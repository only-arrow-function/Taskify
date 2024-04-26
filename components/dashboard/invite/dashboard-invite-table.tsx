import DashboardInviteItem from './dashboard-invite-item';

const DashboardInviteTable = ({ invitations }) => {
  return (
    <div>
      <div className="hidden md:flex text-grayscale-50">
        <span className="md:w-[36%]">이름</span>
        <span className="md:w-[30%]">초대자</span>
        <span className="md:w-[34%]">수락 여부</span>
      </div>

      <ul className="text-sm sm:text-base">
        {invitations.map(({ id, dashboard, inviter }) => (
          <DashboardInviteItem id={id} dashboardTitle={dashboard.title} inviterName={inviter.nickname} />
        ))}
      </ul>
    </div>
  );
};

export default DashboardInviteTable;
