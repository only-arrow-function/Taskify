import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import ProfileBadge from '@/components/profile/profile-badge';
import ProfileUsername from '@/components/profile/profile-username';

import { Assignee, Member, Members } from '@/components/tables/members.type';
import { useHandleDropdown } from '@/hooks/use-handle-dropdown';

import ArrowDownIcon from '@/public/icon/arrow-drop-down.svg';

interface ManagerDropdownProps {
  placeholder?: string;
  assignee?: Assignee;
  members: Members | undefined;
  handleAssignee: (member: Member) => void;
}

const profileBadge = (nickname: string, profileImageUrl?: string) => {
  return profileImageUrl ? <Image src={profileImageUrl} alt={`${nickname}의 프로필`} fill /> : nickname.slice(0, 1);
};

const ManagerDropdown = (
  { placeholder, members, assignee, handleAssignee }: ManagerDropdownProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
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

  const [selectedMember, setSelectedMember] = useState(assignee?.nickname || '');
  const [selectedMemberProfile, setSelectedMemberProfile] = useState(assignee?.profileImageUrl || '');
  const handleSelectedMember = (member: Member) => {
    setSelectedMember(member.nickname);
    setSelectedMemberProfile(member.profileImageUrl);
    handleCloseDropdown();
    handleAssignee(member);
  };

  const buttonStyles = !selectedMember ? 'text-grayscale-50' : 'text-black';

  console.log(selectedMember, members);

  return (
    <div>
      <div className="flex flex-col relative">
        <label className="text-grayscale-80 text-base font-medium mb-[0.5rem]">담당자</label>
        <div className="flex sm:w-[217px] w-[287px] h-[3.125rem] rounded-lg border focus-within:border-2 focus-within:border-violet-50 cursor-pointer relative">
          <button
            className={`px-[16px] w-full outline-none flex items-center gap-x-3 font-normal ${buttonStyles}`}
            type="button"
            data-type="member"
            ref={ref}
          >
            {selectedMember ? (
              <>
                <ProfileBadge>{profileBadge(selectedMember, selectedMemberProfile)}</ProfileBadge>
                <ProfileUsername username={selectedMember} />
              </>
            ) : (
              placeholder
            )}
          </button>
          <Image
            src={ArrowDownIcon}
            alt="아래 화살표"
            className="absolute pointer-events-none top-[50%] translate-y-[-50%] right-[16px]"
          />
        </div>

        {isOpenDropdown && (
          <ul
            className="left-0 sm:w-[217px] w-[287px] rounded-lg border mt-1 absolute bg-white sm:right-[36px] top-[100%] z-50"
            ref={memberRef}
          >
            {members?.members.map((member) => (
              <li
                className="flex items-center gap-x-3 pl-6 py-1 cursor-pointer hover:bg-grayscale-30 w-full overflow-hidden"
                onClick={handleSelectedMember.bind(null, member)}
              >
                <ProfileBadge>{profileBadge(member.nickname, member.profileImageUrl)}</ProfileBadge>
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
    </div>
  );
};

export default forwardRef(ManagerDropdown);
