import { PropsWithChildren } from 'react';

const ModalTodoDetailLayout = ({ children }: PropsWithChildren) => {
  const sizeStyles = 'px-5 pb-7 pt-[14px] w-[327px] md:px-7 md:py-8 md:w-[680px] lg:w-[730px]';
  // const sizeStyles = 'px-5 pb-7 pt-[14px] w-[327px] md:px-7 md:py-8 md:min-w-[680px] md:max-w-[730px]';

  return (
    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg ${sizeStyles} z-30`}>
      {children}
    </div>
  );
};

export default ModalTodoDetailLayout;
