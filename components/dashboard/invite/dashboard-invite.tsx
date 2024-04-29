import React from 'react';
import DashboardInviteTable from '@/components/dashboard/invite/dashboard-invite-table';

const DashboardInvite = ({ searchTitle }: { searchTitle?: string }) => {
  return (
    <section className="mb-10 w-[80vw] max-h-[650px] ml-6 bg-white rounded-lg sm:w-[67vw] sm:ml-10 md:w-[70vw] xl:max-w-[1022px] lg:ml-10">
      <div className="px-4 py-6 sm:px-7 sm:pt-8">
        <h3 className="text-2xl font-bold">초대받은 대시보드</h3>
        <DashboardInviteTable searchTitle={searchTitle} />
      </div>
    </section>
  );
};

export default DashboardInvite;
