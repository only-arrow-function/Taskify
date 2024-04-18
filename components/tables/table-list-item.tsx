import { useSWRConfig } from 'swr';
import { Member } from './members-type';
import TableButton from './table-button';
import requests from '@/apis/request';
// import { useGetMembers } from '@/hooks/swr/use-members';

const TableListItem = ({ member, members }: { member: Member; members: Member[] }) => {
  const { mutate } = useSWRConfig();

  const handleDeleteMember = (deleteId: number) => async () => {
    const updateMembers = (deleteId: number) => {
      const newMembers = members.filter((member) => member.id !== deleteId);
      return { members: newMembers, totalCount: newMembers.length };
    };
  
    try {
      await requests.deleteMembers(deleteId);
      mutate('members', updateMembers(deleteId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className="flex justify-between items-center py-3 shadow-b-inner-30 px-5 first-of-type:pt-5 last-of-type:shadow-none last-of-type:pb-0 sm:px-7 sm:py-4 sm:first-of-type:pt-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="inline-flex justify-center items-center size-[34px] rounded-full bg-[#C3B1A2] font-[Montserrat] text-sm font-semibold text-white sm:size-[38px] sm:text-base">
          {member.email[0].toUpperCase()}
        </span>
        <span className="text-grayscale-80 text-sm sm:text-base">{member.nickname}</span>
      </div>
      <TableButton purpose="negative" onClick={handleDeleteMember(member.id)}>
        삭제
      </TableButton>
    </li>
  );
};

export default TableListItem;
