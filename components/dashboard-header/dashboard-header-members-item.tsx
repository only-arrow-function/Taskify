import { translateLayouts } from './dashboard-header-members.constants';

const DashboardHeaderMemberItem = (props: any) => {
  return (
    <li
      className={` w-[2.375rem] h-[2.375rem] rounded-full flex items-center justify-center bg-slate-500 text-white ${
        translateLayouts[props.index as keyof typeof translateLayouts]
      }`}
    >
      {props.user.slice(0, 1)}
    </li>
  );
};
export default DashboardHeaderMemberItem;
