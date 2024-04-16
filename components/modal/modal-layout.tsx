import { PropsWithChildren } from 'react';

const ModalLayout = ({
  children,
  purpose,
}: PropsWithChildren<{ purpose?: 'newCard' }>) => {
  const sizeClassName = `w-[327px] px-5 py-7 ${
    purpose ? 'pb-5 sm:w-[506px]' : 'sm:w-[540px]'
  } sm:px-7 sm:pt-8 sm:pb-7`;

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg ${sizeClassName}`}
    >
      {children}
    </div>
  );
};

export default ModalLayout;
