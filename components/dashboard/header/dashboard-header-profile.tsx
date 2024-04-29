import Image from 'next/image';
import ProfileBadge from '@/components/profile/profile-badge';
import ProfileUsername from '@/components/profile/profile-username';
import { useAuthenticationStore } from '@/store/auth';

interface DashboardHeaderProfileProp {
  onClick: () => void;
}

const DashboardHeaderProfile = (prop: DashboardHeaderProfileProp) => {
  const nickname = useAuthenticationStore((state) => state.nickname);
  const profileImage = useAuthenticationStore((state) => state.profileImageUrl);
  const profileBadge = profileImage ? (
    <Image src={profileImage} alt={`${nickname}님의 프로필`} fill />
  ) : (
    nickname.slice(0, 1)
  );

  return (
    <div className="flex items-center gap-x-3 cursor-pointer" onClick={prop.onClick}>
      <ProfileBadge>{profileBadge}</ProfileBadge>
      <ProfileUsername username={nickname} />
    </div>
  );
};

export default DashboardHeaderProfile;
