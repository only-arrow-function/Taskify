import DashboardHeaderMemberItem from './dashboard-header-members-item';

const DashboardHeaderMembers = (props: { users: string[] }) => {
  const greaterThanFive = props.users.length > 5;
  const remainingUserCount = props.users.slice(4, props.users.length).length;
  const users = greaterThanFive ? props.users.slice(0, 4) : props.users;

  return (
    <ul className="flex relative">
      {users.map((user, index) => (
        <DashboardHeaderMemberItem key={index} user={user} index={index} />
      ))}

      {greaterThanFive && (
        <li className="w-[2.375rem] h-[2.375rem] rounded-full flex items-center justify-center bg-slate-500 text-white -ml-[10px]">
          +{remainingUserCount}
        </li>
      )}
    </ul>
  );
};

export default DashboardHeaderMembers;
