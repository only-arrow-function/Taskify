import { PropsWithChildren } from 'react';

const COLOR_STYLE = {
  positive: 'bg-violet-50 border border-violet-50',
  negative: 'bg-white border border-grayscale-40',
};

const ModalButton = ({
  purpose,
  disabled = false,
  onClick,
  children,
}: PropsWithChildren<{
  purpose: 'positive' | 'negative';
  disabled: boolean;
  onClick?: () => void;
}>) => {
  const colorStyle = `${COLOR_STYLE[purpose]} disabled:bg-grayscale-50 disabled:border-grayscale-50`;
  const fontStyle = `text-sm font-medium ${purpose === 'positive' ? 'text-white' : 'text-grayscale-60'} sm:text-base`;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-[138px] h-[42px] rounded-lg sm:w-30 sm:h-12 ${colorStyle} ${fontStyle}`}
    >
      {children}
    </button>
  );
};

export default ModalButton;
