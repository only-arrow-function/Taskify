import Image from 'next/image';
import { useRouter } from 'next/router';
import ProfileBadge from '@/components/profile/profile-badge';
import { Assignee } from '@/components/tables/members.type';

const DashboardHeaderMembers = (props: { users: Assignee[]; totalCount: number }) => {
  const router = useRouter();
  if (router.pathname.match('my')) return null;

  const isGreaterThanFive = props.totalCount > 5;
  const remainingUserCount = props.totalCount - 4;

  return (
    <ul className="flex relative">
      {props.users.map((user, index) => {
        const profileBadge = user.profileImageUrl ? (
          <Image src={user.profileImageUrl} alt={`${user.nickname}의 프로필`} fill />
        ) : (
          user.nickname.slice(0, 1)
        );

        return (
          <li key={index}>{<ProfileBadge styles={index >= 1 ? '-ml-[10px]' : ''}>{profileBadge}</ProfileBadge>}</li>
        );
      })}

      {isGreaterThanFive && <ProfileBadge styles="-ml-[10px]">+{remainingUserCount}</ProfileBadge>}
    </ul>
  );
};

export default DashboardHeaderMembers;
