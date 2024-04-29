import { GetServerSideProps } from 'next';

import ColumnList from '@/components/card/column/column-list';
import DashboardHeader from '@/components/dashboard/header/dashboard-header';
import DashboardSectionLayout from '@/components/dashboard/layout/dashboard-section-layout';
import SideMenu from '@/components/side-menu/side-menu';

interface Props {
  id: string;
  page?: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, page } = context.query;

  return {
    props: {
      id,
      page: page ? page : 1,
    },
  };
};

export default function index({ id, page }: Props) {
  const idToNumber = Number(id);
  const PageToNumber = Number(page);

  return (
    <DashboardSectionLayout>
      <SideMenu page={PageToNumber} />
      <div className="flex-col w-full bg-grayscale-20">
        <DashboardHeader dashboardId={idToNumber} page={PageToNumber} />
        <main>
          <ColumnList id={idToNumber} page={PageToNumber} />
        </main>
      </div>
    </DashboardSectionLayout>
  );
} // 레이아웃을 _app.tsx 로 옮겼습니다. 이유 : edit 중첩 페이지에 동일한 레이아웃을 적용하기 위해
