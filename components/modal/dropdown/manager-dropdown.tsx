import Image from 'next/image';

import { useHandleDropdown, useHandleDropdownOutside } from '@/hooks/use-handle-dropdown';

import { Member, Members } from '@/components/tables/members.type';
import ArrowDownIcon from '@/public/icon/arrow-drop-down.svg';
import ProfileBadge from '@/components/profile/profile-badge';
import ProfileUsername from '@/components/profile/profile-username';

interface ManagerDropdownProps {
  placeholder: string;
  membersData: Members | undefined;
}

const ManagerDropdown = ({ placeholder, membersData }: ManagerDropdownProps) => {
  const { isOpenDropdown, handleOpenDropdown, handleCloseDropdown, handleToggleDropdown } = useHandleDropdown();
  // const initRef = useHandleDropdownOutside(handleOpenDropdown, handleCloseDropdown);

  console.log(isOpenDropdown);

  return (
    <div>
      <div className="flex flex-col relative">
        <label className="text-grayscale-80 text-base font-medium">담당자</label>
        <div className="flex sm:w-[217px] w-[287px] h-[3.125rem] px-4 rounded-lg border focus-within:border-violet-50">
          {/* <input placeholder={placeholder} className="w-full outline-none" /> */}
          <button className="w-full outline-none flex items-center" onClick={handleToggleDropdown}>
            {placeholder}
          </button>
          <Image src={ArrowDownIcon} alt="아래 화살표" />
        </div>

        {isOpenDropdown && (
          <ul className="left-0 flex sm:w-[217px] w-[287px] h-[3.125rem] rounded-lg border mt-1 absolute bg-white sm:right-[36px] top-[100%] ">
            {membersData?.members.map((member) => (
              <li className="flex items-center gap-x-3 px-4 cursor-pointer">
                <ProfileBadge>{member.nickname.slice(0, 1)}</ProfileBadge>
                <ProfileUsername username={member.nickname} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* {isOpenDropdown && (
        <ul className="flex sm:w-[217px] w-[287px] h-[3.125rem] rounded-lg border mt-1 absolute bg-white sm:top-[167px] sm:right-[36px]">
          {membersData?.members.map((member) => (
            <li className="flex items-center gap-x-3">
              <ProfileBadge>{member.nickname.slice(0, 1)}</ProfileBadge>
              <ProfileUsername username={member.nickname} />
            </li>
          ))}
        </ul>
      )} */}
      <div className="flex w-full h-[1.5rem]" />
    </div>
  );
};

export default ManagerDropdown;
