import { useState } from 'react';

import Link from 'next/link';
import NewDashboardModal from '../modal/new-dashboard-modal';
import DashboardOpenButton from '@/components/buttons/domain/dashboard-open-button';
import NewDashboardAddButton from '@/components/buttons/domain/new-dashboard-add-button';
import DashboardPagination from '@/components/dashboard/pagination/dashboard-pagination';

import { DashboardItem, useDashboards } from '@/hooks/swr/dashboard/use-dashboards';
import usePagination from '@/hooks/use-pagination';
import { useToggleStore } from '@/store/toggle-store';

const PAGE_DASHBOARD_COUNT = 5;

const DashboardList = () => {
  const { data } = useDashboards();

  const isToggle = useToggleStore((state) => state.isToggle);
  const handleOpenToggle = useToggleStore((state) => state.handleOpenToggle);

  const { totalPages, currentPage, sliceData, nextCurrentPage, prevCurrentPage } = usePagination<DashboardItem>(
    data!.dashboards,
  );

  return (
    <>
      {isToggle && <NewDashboardModal />}
      <section className="w-[80vw] my-6 ml-6 sm:w-[67vw] md:my-10 sm:ml-10 md:w-[70vw] xl:max-w-[1022px] lg:ml-10">
        <ul className="grid gap-[13px] md:grid-cols-2 lg:grid-cols-3">
          <li>
            <NewDashboardAddButton onOpenModal={handleOpenToggle} />
          </li>
          {sliceData.map((dashboard) => (
            <li key={dashboard.id} className="relative">
              <Link href={`/dashboard/${dashboard.id}`}>
                <DashboardOpenButton color={dashboard.color}>{dashboard.title}</DashboardOpenButton>
              </Link>
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
