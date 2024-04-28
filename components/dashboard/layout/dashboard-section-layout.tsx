import React, { PropsWithChildren } from 'react';

const DashboardSectionLayout = (props: PropsWithChildren) => {
  return (
    <main className="relative bg-grayscale-20 min-h-screen pb-2 pl-[67px] sm:pl-[21.505vw] lg:pl-[15.625vw]">
      {props.children}
    </main>
  );
};

export default DashboardSectionLayout;
