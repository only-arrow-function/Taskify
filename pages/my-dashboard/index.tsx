import { GetServerSideProps } from 'next';

import AuthHOC from '@/auth/auth-hoc';
import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardInvite from '@/components/dashboard/invite/dashboard-invite';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import DashboardList from '@/components/dashboard/list/dashboard-list';
import SideMenu from '@/components/side-menu/side-menu';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const title = context.query['title'];
  const page = context.query['title'];

  return { props: { 
    title: title ? title : null,
    page: page ? page : 1,
  } };
};

const MyDashboard = ({ title, page }: { title?: string, page?: string }) => {
  const pageToNumber = Number(page);

  return (
    <DashboardSectionLayout>
      <SideMenu page={pageToNumber}/>
      <div className='flex-col w-full'>
        <DashboardHeader />
        <DashboardList />
        <DashboardInvite searchTitle={title} />
      </div>
    </DashboardSectionLayout>
  );
};

export default AuthHOC(MyDashboard);
