import { useRouter } from 'next/router';
import ProfileBadge from '@/components/profile/profile-badge';

const DashboardHeaderMembers = (props: { users: string[] }) => {
  const router = useRouter();
  if (router.pathname.match('my')) return null;

  const isGreaterThanFive = props.users.length > 5;
  const remainingUserCount = props.users.length - 4;
  const users = props.users.slice(0, 4);

  return (
    <ul className="flex relative">
      {users.map((user, index) => (
        <li key={index}>
          <ProfileBadge styles={index >= 1 ? '-ml-[10px]' : ''}>
            {user.slice(0, 1)}
          </ProfileBadge>
        </li>
      ))}

      {isGreaterThanFive && (
        <ProfileBadge styles="-ml-[10px]">+{remainingUserCount}</ProfileBadge>
      )}
    </ul>
  );
};

export default DashboardHeaderMembers;
