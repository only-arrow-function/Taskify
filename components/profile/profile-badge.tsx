import { ReactNode } from 'react';

interface ProfileBadgeProps {
  styles?: string;
  children: ReactNode;
}

const ProfileBadge = (props: ProfileBadgeProps) => {
  return (
    <div
      className={`w-[2.375rem] h-[2.375rem] rounded-full border-2 border-white flex items-center justify-center bg-slate-500 text-white ${props.styles}`}
    >
      {props.children}
    </div>
  );
};

export default ProfileBadge;
