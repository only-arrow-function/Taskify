import { PropsWithChildren } from 'react';

const GridLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="sm:flex justify-between">{children}</div>
      <div className="sm:h-[1.5rem]" />
    </>
  );
};

export default GridLayout;
