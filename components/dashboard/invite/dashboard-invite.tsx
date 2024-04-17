import React from 'react';
import DashboardInviteSearch from '@/components/dashboard/invite/dashboard-invite-search';
import DashboardInviteTable from '@/components/dashboard/invite/dashboard-invite-table';

const DashboardInvite = () => {
  return (
    <section className="w-[1022px] h-[600px] bg-white rounded-lg md:w-[67.742vw] lg:w-[1022px]">
      <div className="px-7 pt-8">
        <h3 className="text-2xl font-bold">초대받은 대시보드</h3>
        <DashboardInviteSearch />
        <DashboardInviteTable />
      </div>
    </section>
  );
};

export default DashboardInvite;
