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
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
};

const index = ({ id }: IdProps) => {
  const idToNumber = Number(id);

  return (
    <DashboardSectionLayout>
      <DashboardHeader dashboardId={idToNumber} />
      <main className="flex flex-col px-[15px] py-[15px] gap-[10px]">
        <ReturnDashboardPage dashboardId={idToNumber} />
        <EditDashboard dashboardId={idToNumber} />
        <MembersTable dashboardId={idToNumber} />
        <InviteTable dashboardId={idToNumber} />
        <DashboardDeleteButton dashboardId={idToNumber}/>
      </main>
      <SideMenu />
    </DashboardSectionLayout>
  );
};

export default index;
