const SideMenuDashboardItemSkelton = () => {
  return (
    <>
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <div key={index} className="animate-pulse w-full ">
            <div className="w-full h-[45px] sm:h-[43px] xl:h-[45px] flex items-center rounded-[4px]">
              <div className="w-[8px] dark:bg-grayscale-40 h-[8px] rounded-full"></div>
              <div className="hidden sm:block w-[70%] dark:bg-grayscale-40 h-[20px] ml-[16px] rounded-md"></div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SideMenuDashboardItemSkelton;
