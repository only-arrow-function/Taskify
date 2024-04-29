import { PropsWithChildren } from 'react';

const STYLE = {
  size: {
    outInput: 'px-[54px] py-3 rounded-lg sm:px-[46px] sm:py-[14px]',
    inInput: 'px-[31px] py-[7px] rounded-[4px] sm:py-[9px]',
  },
  color: {
    positive: {
      outInput: 'bg-violet-50 border-violet-50 text-white',
      inInput: 'bg-violet-50 border-violet-50 text-white',
    },
    negative: {
      outInput: 'bg-white border-grayscale-40 text-grayscale-60',
      inInput: 'bg-white border-grayscale-40 text-violet-50',
    },
  },
  fontSize: {
    outInput: 'text-sm sm:text-base',
    inInput: 'text-xs',
  },
};

const ModalButton = ({
  purpose,
  disabled = false,
  position = 'outInput',
  onClick,
  children,
}: PropsWithChildren<{
  purpose: 'positive' | 'negative';
  disabled?: boolean;
  position?: 'inInput' | 'outInput';
  onClick?: () => void;
}>) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex-shrink-0 py ${STYLE.size[position]} ${STYLE.color[purpose][position]} ${STYLE.fontSize[position]} border font-medium leading-[1.1] disabled:bg-grayscale-50 disabled:border-grayscale-50`}
    >
      {children}
    </button>
  );
};

export default ModalButton;
