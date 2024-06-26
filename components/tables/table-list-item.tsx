import Image from 'next/image';

import type { Member } from './members.type';
import TableButton from './table-button';
import { useDeleteMembers } from '@/hooks/react-query/use-query-members';
import crownImg from '@/public/icon/crown.svg';

const TableListItem = ({
  member,
  dashboardId,
  currentPage,
}: {
  member: Member;
  dashboardId: number;
  currentPage: number;
}) => {
  const { mutate } = useDeleteMembers(dashboardId, member.id, currentPage);

  return (
    <li className="flex justify-between items-center py-3 shadow-b-inner-30 px-5 first-of-type:pt-5 last-of-type:shadow-none last-of-type:pb-0 sm:px-7 sm:py-4 sm:first-of-type:pt-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="inline-flex justify-center items-center size-[34px] rounded-full bg-slate-500 font-[Montserrat] text-sm font-semibold text-white sm:size-[38px] sm:text-base">
          {member.nickname[0].toUpperCase()}
        </span>
        <span className="text-grayscale-80 text-sm sm:text-base">{member.nickname}</span>
      </div>
      {member.isOwner && (
        <div className="sm:block relative mb-1 ml-1 w-[25px] h-[25px]">
          <Image src={crownImg} alt="crown" fill />
        </div>
      )}
      {!member.isOwner && (
        <TableButton purpose="negative" onClick={mutate}>
          삭제
        </TableButton>
      )}
    </li>
  );
};

export default TableListItem;
