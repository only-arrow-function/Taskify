import ProfileBadge from '@/components/profile/profile-badge';
import ProfileUsername from '@/components/profile/profile-username';
import { useAuthenticationStore } from '@/store/auth';

const DashboardHeaderProfile = () => {
  const nickname = useAuthenticationStore((state) => state.nickname);
  const profileImage = useAuthenticationStore((state) => state.profileImageUrl);

  console.log(nickname, profileImage);

  return (
    <div className="flex items-center gap-x-3">
      <ProfileBadge>{profileImage && nickname.slice(0, 1)}</ProfileBadge>
      <ProfileUsername username={nickname} />
    </div>
  );
};

export default DashboardHeaderProfile;
