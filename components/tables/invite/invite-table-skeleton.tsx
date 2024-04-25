import React from 'react';

const InviteTableSkeleton = () => {
  return (
    <>
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <li key={index} className="animate-pulse w-full border-grayscale-30">
            <div className="w-full h-[70px] flex justify-between items-center border-b border-grayscale-30 py-[12px]">
              <div className="w-[100px] sm:w-[40%] dark:bg-grayscale-40 h-[20px] rounded-md"></div>
              <div className="w-[84px] dark:bg-grayscale-40 h-[32px] ml-[16px] rounded-md"></div>
            </div>
          </li>
        ))}
    </>
  );
};

export default InviteTableSkeleton;
