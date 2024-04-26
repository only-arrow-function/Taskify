import { GetServerSideProps } from 'next';

import EditDashboard from '@/components/dashboard/edit/edit-dashboard';
import ReturnDashboardPage from '@/components/dashboard/edit/return-dashboard-page';
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
    <main className="flex flex-col px-[15px] py-[15px] gap-[10px]">
      <ReturnDashboardPage dashboardId={idToNumber} />
      <EditDashboard dashboardId={idToNumber} />
      <MembersTable dashboardId={idToNumber} />
      <InviteTable dashboardId={idToNumber} />
    </main>
  );
};

export default index;
