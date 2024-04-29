import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import ProfileBadge from '@/components/profile/profile-badge';
import ProfileUsername from '@/components/profile/profile-username';
import { Members } from '@/components/tables/members.type';
import { useHandleDropdown, useHandleDropdownOutside } from '@/hooks/use-handle-dropdown';

import ArrowDownIcon from '@/public/icon/arrow-drop-down.svg';

interface ManagerDropdownProps {
  placeholder?: string;
  nickname?: string;
  members: Members | undefined;
}

const ManagerDropdown = ({ placeholder, members, nickname }: ManagerDropdownProps) => {
  const { isOpenDropdown, handleOpenDropdown, handleCloseDropdown, handleToggleDropdown } = useHandleDropdown();
  // const initRef = useHandleDropdownOutside(handleOpenDropdown, handleCloseDropdown);

  const memberRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      const target = event.target as Element;

      if (target.closest('button[data-type="member"]')) {
        handleToggleDropdown();
        return;
      }

      if (memberRef.current && !memberRef.current.contains(event.target as any)) {
        handleCloseDropdown();
        return;
      }
    };

    document.addEventListener('mousedown', handleOutside);

    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const [selectedMember, setSelectedMember] = useState(nickname || '');
  const handleSelectedMember = (member: string) => {
    setSelectedMember(member);
    handleCloseDropdown();
  };

  return (
    <div>
      <div className="flex flex-col relative">
        <label className="text-grayscale-80 text-base font-medium">담당자</label>
        <div className="flex sm:w-[217px] w-[287px] h-[3.125rem] px-4 pl-6 rounded-lg border focus-within:border-violet-50 cursor-pointer">
          <button className="w-full outline-none flex items-center gap-x-3" type="button" data-type="member">
            {selectedMember ? (
              <>
                <ProfileBadge>{selectedMember.slice(0, 1)}</ProfileBadge>
                <ProfileUsername username={selectedMember} />
              </>
            ) : (
              placeholder
            )}
          </button>
          <Image src={ArrowDownIcon} alt="아래 화살표" />
        </div>

        {isOpenDropdown && (
          <ul
            className="left-0 flex sm:w-[217px] w-[287px] h-[3.125rem] rounded-lg border mt-1 absolute bg-white sm:right-[36px] top-[100%]"
            ref={memberRef}
          >
            {members?.members.map((member) => (
              <li
                className="flex items-center gap-x-3 pl-6 cursor-pointer hover:bg-grayscale-30 w-full overflow-hidden"
                onClick={handleSelectedMember.bind(null, member.nickname)}
              >
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
