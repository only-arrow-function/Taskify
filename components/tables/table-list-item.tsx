import { useQueryClient } from '@tanstack/react-query';
import type { Member } from './members.type';
import TableButton from './table-button';
import { useDeleteMembers } from '@/hooks/react-query/use-query-members';

const TableListItem = ({ member, dashboardId }: { member: Member; dashboardId: string }) => {
  const queryClient = useQueryClient();
  const { mutate } = useDeleteMembers(dashboardId, String(member.id), queryClient);

  return (
    <li className="flex justify-between items-center py-3 shadow-b-inner-30 px-5 first-of-type:pt-5 last-of-type:shadow-none last-of-type:pb-0 sm:px-7 sm:py-4 sm:first-of-type:pt-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="inline-flex justify-center items-center size-[34px] rounded-full bg-[#C3B1A2] font-[Montserrat] text-sm font-semibold text-white sm:size-[38px] sm:text-base">
          {member.email[0].toUpperCase()}
        </span>
        <span className="text-grayscale-80 text-sm sm:text-base">{member.nickname}</span>
      </div>
      <TableButton purpose="negative" onClick={mutate}>
        삭제
      </TableButton>
    </li>
  );
};

export default TableListItem;
