import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardInvite from '@/components/dashboard/invite/dashboard-invite';
// import DashboardLayout from '@/components/dashboard/layout/dashboard-layout';

const MyDashboard = () => {
  return (
    <div className="bg-grayscale-20 min-h-screen pl-[17.5vw] pr-[4.167vw] max-[744px]:w-full max-[744px]:pl-0">
      <DashboardHeader />
      <DashboardInvite />
    </div>
  );
};

export default MyDashboard;
