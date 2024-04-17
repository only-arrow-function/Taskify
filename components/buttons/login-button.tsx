import { ReactNode } from 'react';

interface Props {
  isValidated: boolean;
  variant: 'primary' | 'secondary';
  type: 'submit' | 'button' | 'reset';
  children: ReactNode;
}

const LoginButton = ({ isValidated }: Props) => {
  // style
  const baseClasses = 'flex items-center justify-center gap-10px flex-shrink-0 rounded-md';
  const variantClasses = `w-[351px] sm:w-[520px] h-[50px] py-[14px]`;

  return (
    <button
      className={`${
        isValidated ? 'bg-violet-50 hover:bg-violet-50' : 'bg-grayscale-50'
      } focus:outline-none focus:shadow-outline cursor-${
        isValidated ? 'pointer' : 'not-allowed'
      } ${baseClasses} ${variantClasses}`}
      disabled={!isValidated}
    >
      <span className="text-white text-center font-[Pretendard] text-lg font-medium leading-normal">로그인</span>
    </button>
  );
};

export default LoginButton;
