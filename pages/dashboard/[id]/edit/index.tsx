import { GetServerSideProps } from 'next';

import DashboardDeleteButton from '@/components/buttons/domain/dashboard-delete-button';
import EditDashboard from '@/components/dashboard/edit/edit-dashboard';
import ReturnDashboardPage from '@/components/dashboard/edit/return-dashboard-page';
import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import SideMenu from '@/components/side-menu/side-menu';
import InviteTable from '@/components/tables/invite/invite-table';
import MembersTable from '@/components/tables/members-table';
import { IdProps } from '@/constant/type/data/dashboard.type';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, page } = context.query;

  return {
    props: {
      id,
      page: page,
    },
  };
};

const index = ({ id, page }: IdProps) => {
  const idToNumber = Number(id);
  const pageToNumber = Number(page);

  return (
    <DashboardSectionLayout>
      <SideMenu page={pageToNumber}/>
      <div className='flex-col w-full'>
        <DashboardHeader dashboardId={idToNumber} page={pageToNumber}/>
        <main className="flex flex-col px-[15px] py-[15px] gap-[10px] overflow-y-auto">
          <ReturnDashboardPage dashboardId={idToNumber} page={pageToNumber}/>
          <EditDashboard dashboardId={idToNumber} page={pageToNumber}/>
          <MembersTable dashboardId={idToNumber} />
          <InviteTable dashboardId={idToNumber} />
          <DashboardDeleteButton dashboardId={idToNumber} page={pageToNumber}/>
        </main>
      </div>
    </DashboardSectionLayout>
  );
};

export default index;
