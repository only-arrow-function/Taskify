import ProfileBadge from '../profile/profile-badge';
import ProfileUsername from '../profile/profile-username';

const DashboardHeaderProfile = (props: { username: string }) => {
  return (
    <div className="flex items-center gap-x-3">
      <ProfileBadge username={props.username} />
      <ProfileUsername username={props.username} />
    </div>
  );
};

export default DashboardHeaderProfile;
