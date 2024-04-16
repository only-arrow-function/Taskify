interface DashboardHeaderMemberItemProps {
  index: number;
  user: string;
}

const DashboardHeaderMemberItem = (props: DashboardHeaderMemberItemProps) => {
  const marginLayouts = props.index >= 1 ? '-ml-[10px]' : '';

  return (
    <li
      className={`w-[2.375rem] h-[2.375rem] rounded-full flex items-center justify-center bg-slate-500 text-white ${marginLayouts}`}
    >
      {props.user.slice(0, 1)}
    </li>
  );
};
export default DashboardHeaderMemberItem;
