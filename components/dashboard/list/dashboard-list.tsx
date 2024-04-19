import { useState } from 'react';

import NewDashboardModal from '../modal/new-dashboard-modal';
import DashboardOpenButton from '@/components/buttons/domain/dashboard-open-button';
import NewDashboardAddButton from '@/components/buttons/domain/new-dashboard-add-button';
import DashboardPagination from '@/components/dashboard/pagination/dashboard-pagination';

import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';
import { useBoundStore } from '@/store';

const PAGE_DASHBOARD_COUNT = 5;

const DashboardList = () => {
  const { data } = useDashboards();
  const { isToggle, handleOpenToggle } = useBoundStore((state) => state);
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) return null;

  const totalPages =
    data?.dashboards?.length % PAGE_DASHBOARD_COUNT === 0
      ? data?.dashboards?.length / PAGE_DASHBOARD_COUNT
      : Math.ceil(data.dashboards.length / PAGE_DASHBOARD_COUNT);

  const viewDashboards = data?.dashboards.slice(
    (currentPage - 1) * PAGE_DASHBOARD_COUNT,
    currentPage * PAGE_DASHBOARD_COUNT,
  );

  console.log(viewDashboards);

  const nextCurrentPage = () => setCurrentPage((prevPage) => (prevPage >= totalPages ? prevPage : prevPage + 1));
  const prevCurrentPage = () => setCurrentPage((prevPage) => (prevPage < 0 ? 0 : prevPage - 1));

  console.log(data.dashboards);
  // 4 / 5 === 0

  // 7 / 5 === 1

  /**
   * ! 한 페이지에 5개씩 보여줌
   * ! 다음 버튼을 누를 때마다 5개 이후로 보여줌.
   * ! 1페이지라면 0 ~ 4
   * ! 2페이지라면 4 ~ 9
   */

  return (
    <>
      {isToggle && <NewDashboardModal />}
      <section className="w-[80vw] my-6 ml-6 sm:w-[67vw] md:my-10 sm:ml-10 md:w-[70vw] xl:max-w-[1022px] lg:ml-10">
        <ul className="grid gap-[13px] md:grid-cols-2 lg:grid-cols-3">
          <li>
            <NewDashboardAddButton onOpenModal={handleOpenToggle} />
          </li>
          {viewDashboards.map((dashboard) => (
            <li key={dashboard.id} className="relative">
              <DashboardOpenButton color={dashboard.color}>{dashboard.title}</DashboardOpenButton>
            </li>
          ))}
        </ul>
        <DashboardPagination
          totalPages={totalPages}
          currentPage={currentPage}
          prevCurrentPage={prevCurrentPage}
          nextCurrentPage={nextCurrentPage}
        />
      </section>
    </>
  );
};

export default DashboardList;
