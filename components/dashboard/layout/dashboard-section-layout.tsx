import React, { PropsWithChildren } from 'react';

const DashboardSectionLayout = (props: PropsWithChildren) => {
  return (
    <div className="relative bg-grayscale-20 min-h-screen pl-[67px] sm:pl-[21.505vw] lg:pl-[15.625vw]">
      {props.children}
    </div>
  );
};

export default DashboardSectionLayout;
