import React, { PropsWithChildren } from 'react';

const DashboardSectionLayout = (props: PropsWithChildren) => {
  return (
    <main className="relative h-full flex bg-grayscale-20 min-h-screen pb-2">
      {props.children}
    </main>
  );
};

export default DashboardSectionLayout;
