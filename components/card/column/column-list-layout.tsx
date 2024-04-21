import { PropsWithChildren } from 'react';

const ColumnListLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full flex justify-start">{children}</div>;
};

export default ColumnListLayout;
