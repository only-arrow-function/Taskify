import { PropsWithChildren } from 'react';

const ModalTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="mb-6 text-grayscale-80 text-xl font-bold leading-6 sm:mb-8 sm:text-2xl sm:leading-[29px]">
      {children}
    </h2>
  );
};

export default ModalTitle;
