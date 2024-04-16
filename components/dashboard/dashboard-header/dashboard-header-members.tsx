import { useRouter } from 'next/router';
import ProfileBadge from '../../profile/profile-badge';

const DashboardHeaderMembers = (props: { users: string[] }) => {
  const router = useRouter();
  if (router.pathname.match('my')) return null;

  const greaterThanFive = props.users.length > 5;
  const remainingUserCount = props.users.slice(4, props.users.length).length;
  const users = greaterThanFive ? props.users.slice(0, 4) : props.users;

  return (
    <ul className="flex relative">
      {users.map((user, index) => (
        <li key={index}>
          <ProfileBadge styles={index >= 1 ? '-ml-[10px]' : ''}>
            {user.slice(0, 1)}
          </ProfileBadge>
        </li>
      ))}

      {greaterThanFive && (
        <ProfileBadge styles="-ml-[10px]">+{remainingUserCount}</ProfileBadge>
      )}
    </ul>
  );
};

export default DashboardHeaderMembers;
