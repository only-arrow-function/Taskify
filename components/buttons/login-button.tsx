interface Props {
  isValidated: boolean;
  variant: 'primary' | 'secondary';
}

const LoginButton = ({ isValidated, variant }: Props) => {
  // style
  const baseClasses = "flex items-center justify-center gap-2.5 flex-shrink-0 rounded text-white";
  const variantClasses = variant === 'primary'
  ? 'w-[520px] h-[50px] py-[14px]' // primary 스타일
  : 'w-[351px] h-[50px] py-[14px]'; // secondary 스타일

  return (
    <button
      className={`${
        isValidated ? "bg-violet-50 hover:bg-violet-50" : "bg-grayscale-50"
      } rounded-md focus:outline-none focus:shadow-outline cursor-${
        isValidated ? "pointer" : "not-allowed"
      } ${baseClasses} ${variantClasses}`}
      disabled={!isValidated}
    >
      <span className="text-white text-center font-[Pretendard] text-lg font-medium leading-normal">
        로그인
      </span>
    </button>
  );
};

export default LoginButton;
