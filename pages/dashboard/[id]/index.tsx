import { GetServerSideProps } from 'next';

import ColumnList from '@/components/card/column/column-list';
import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import SideMenu from '@/components/side-menu/side-menu';

interface Props {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
};

export default function index({ id }: Props) {
  const idToNumber = Number(id);
  
  return (
    <DashboardSectionLayout>
      <DashboardHeader dashboardId={idToNumber} />
      <ColumnList id={id} />
      <SideMenu />
    </DashboardSectionLayout>
  );
} // 레이아웃을 _app.tsx 로 옮겼습니다. 이유 : edit 중첩 페이지에 동일한 레이아웃을 적용하기 위해
