import { PropsWithChildren } from 'react';

const ModalLayout = ({ children }: PropsWithChildren) => {
  const sizeStyles = 'w-[327px] px-5 py-7 sm:w-[540px] sm:px-7 sm:pt-8 sm:pb-7';

  return (
    <div
      className={`z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg ${sizeStyles}`}
    >
      {children}
    </div>
  );
};

export default ModalLayout;
