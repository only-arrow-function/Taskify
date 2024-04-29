import { useRouter } from 'next/router';
import ProfileBadge from '@/components/profile/profile-badge';

const DashboardHeaderMembers = (props: { users: string[]; totalCount: number }) => {
  const router = useRouter();
  if (router.pathname.match('my')) return null;

  const isGreaterThanFive = props.totalCount > 5;
  const remainingUserCount = props.totalCount - 4;

  return (
    <ul className="flex relative">
      {props.users.map((user, index) => (
        <li key={index}>
          <ProfileBadge styles={index >= 1 ? '-ml-[10px]' : ''}>{user.slice(0, 1)}</ProfileBadge>
        </li>
      ))}

      {isGreaterThanFive && <ProfileBadge styles="-ml-[10px]">+{remainingUserCount}</ProfileBadge>}
    </ul>
  );
};

export default DashboardHeaderMembers;
