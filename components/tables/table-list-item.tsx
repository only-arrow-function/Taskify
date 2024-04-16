import { Member } from './members-type';
import BasicButton from '../buttons/basic-button';

const TableListItem = ({ member }: { member: Member }) => {
  return (
    <li className="flex justify-between py-3 shadow-b-inner-30 px-5 first-of-type:pt-5 last-of-type:shadow-none last-of-type:pb-0 sm:px-7 sm:py-4 sm:first-of-type:pt-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="inline-flex justify-center items-center size-[34px] rounded-full bg-[#C3B1A2] font-[Montserrat] text-sm font-semibold text-white sm:size-[38px] sm:text-base">
          {member.email[0].toUpperCase()}
        </span>
        <span className="text-grayscale-80 text-sm sm:text-base">
          {member.nickname}
        </span>
      </div>
      <BasicButton purpose="negative">삭제</BasicButton>
    </li>
  );
};

export default TableListItem;
