import { members } from './mock-members';
import TableListItem from './table-list-item';

const MembersTable = () => {
  return (
    <div className="flex flex-col justify-between min-w-[284px] max-w-[620px] rounded-lg bg-white pt-[22px] pb-4 sm:pt-[26px] sm:pb-5">
      <header className="flex justify-between items-center px-5 mb-[18px] h-[36px] sm:px-7 sm:mb-[27px] sm:h-10">
        <h1 className="text-xl font-bold text-grayscale-80 sm:text-2xl">
          구성원
        </h1>
        <div>
          <span className="text-xs text-grayscale-80 sm:text-sm">
            1 페이지 중 1
          </span>
        </div>
      </header>
      <h2 className="px-5 text-sm leading-[17px] text-grayscale-50 sm:text-base sm:px-7 sm:leading-[19px]">
        이름
      </h2>
      <ul>
        {members.map((member) => (
          <TableListItem key={member.id} member={member} />
        ))}
      </ul>
    </div>
  );
};

export default MembersTable;
