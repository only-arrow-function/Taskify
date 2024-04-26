import React from 'react';
import DashboardInviteSearch from '@/components/dashboard/invite/dashboard-invite-search';
import DashboardInviteTable from '@/components/dashboard/invite/dashboard-invite-table';
import { useInvitedDashboard } from '@/hooks/react-query/use-query-invited-dashboard';

const DashboardInvite = () => {
  const { data } = useInvitedDashboard();

  if (!data) return null;

  return (
    <section className="w-[80vw] h-[600px] ml-6 bg-white rounded-lg sm:w-[67vw] sm:ml-10 md:w-[70vw] xl:max-w-[1022px] lg:ml-10">
      <div className="px-4 py-6 sm:px-7 sm:pt-8">
        <h3 className="text-2xl font-bold">초대받은 대시보드</h3>
        <DashboardInviteSearch />
        <DashboardInviteTable invitations={data.invitations} />
      </div>
    </section>
  );
};

export default DashboardInvite;
