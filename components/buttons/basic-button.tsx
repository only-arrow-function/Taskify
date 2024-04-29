import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  purpose: 'positive' | 'negative';
  eventHandler?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const BasicButton = ({ children, purpose, eventHandler, disabled, type = 'button' }: Props) => {
  const baseClasses =
    'flex items-center justify-center gap-10px flex-shrink-0 rounded w-[109px] py-[7px] sm:w-[84px] sm:py-[6px]';
  const bgVariantClasses = purpose === 'positive' ? 'bg-violet-50' : 'bg-white border border-grayscale-40';
  const textBaseClasses = 'text-center text-lg font-medium leading-normal sm:text-sm text-xs';
  const textVariantClasses = purpose === 'positive' ? 'text-white' : 'text-violet-50';

  const disabledStyle = disabled ? `!bg-grayscale-50` : ``;

  return (
    <button
      type={type}
      className={`${baseClasses} ${bgVariantClasses} ${disabledStyle}`}
      onClick={eventHandler}
      disabled={disabled}
    >
      <span className={`${textBaseClasses} ${textVariantClasses}`}>{children}</span>
    </button>
  );
};

export default BasicButton;
