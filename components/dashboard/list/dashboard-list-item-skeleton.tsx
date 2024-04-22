import React from 'react';

const DashboardListItemSkeleton = () => {
  return (
    <>
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <li key={index} className="animate-pulse">
            <div className="flex h-[70px] px-5 items-center border dark:bg-grayscale-30 rounded-md">
              <div className="w-[20px] dark:bg-grayscale-40 h-[20px] rounded-full"></div>
              <div className="w-[60%] dark:bg-grayscale-40 h-[20px] ml-[16px] rounded-md"></div>
              <div className="w-[20px] h-[20px] dark:bg-grayscale-40 rounded-md ml-auto"></div>
            </div>
          </li>
        ))}
    </>
  );
};

export default DashboardListItemSkeleton;
