const SideMenuDashboardItemSkelton = () => {
  return (
    <>
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <div key={index} className="animate-pulse w-full ">
            <div className="w-full h-[45px] sm:h-[43px] xl:h-[45px] flex justify-center items-center rounded-[4px] sm:px-[12px]">
              <div className="w-[12px] dark:bg-grayscale-40 h-[12px] rounded-full"></div>
              <div className="hidden sm-block w-[70%] dark:bg-grayscale-40 h-[20px] ml-[16px] rounded-md"></div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SideMenuDashboardItemSkelton;
