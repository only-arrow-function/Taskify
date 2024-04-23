import { PropsWithChildren } from 'react';

const ColumnListLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-max flex justify-start flex-col xl:flex-row">{children}</div>
    </div>
  );
};

export default ColumnListLayout;
