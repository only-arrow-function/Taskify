import DashboardHeaderProfile from '@/components/dashboard/header/dashboard-header-profile';

const MypageHeader = () => {
  return (
    <header className="border-b border-grayscale-40 py-6">
      <div className="flex justify-between max-[430px]:justify-end sm:justify-between items-center px-4 sm:px-10 lg:pl-10 lg:pr-20">
        <h2 className=" text-xl font-bold max-[430px]:hidden">계정관리</h2>
        <div className="flex items-center">
          <div className="ml-7 md:ml-8 lg:ml-16 relative">
            <DashboardHeaderProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MypageHeader;
