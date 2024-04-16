import { PropsWithChildren } from 'react';

const ModalButton = ({
  purpose,
  disabled,
  children,
}: PropsWithChildren<{
  purpose: 'positive' | 'negative';
  disabled?: boolean;
}>) => {
  const colorStyle =
    purpose === 'positive'
      ? disabled
        ? 'bg-grayscale-50 border border-grayscale-50'
        : 'bg-violet-50 border border-violet-50'
      : 'bg-white border border-grayscale-40';
  const fontStyle = `text-sm font-medium ${
    purpose === 'positive' ? 'text-white' : 'text-grayscale-60'
  } sm:text-base`;

  return (
    <button
      className={`w-[138px] h-[42px] rounded-lg sm:w-30 sm:h-12 ${colorStyle} ${fontStyle}`}
    >
      {children}
    </button>
  );
};

export default ModalButton;
