import ProfileBadge from '@/components/profile/profile-badge';
import ProfileUsername from '@/components/profile/profile-username';

const DashboardHeaderProfile = (props: { username: string }) => {
  return (
    <div className="flex items-center gap-x-3">
      <ProfileBadge>{props.username.slice(0, 1)}</ProfileBadge>
      <ProfileUsername username={props.username} />
    </div>
  );
};

export default DashboardHeaderProfile;
