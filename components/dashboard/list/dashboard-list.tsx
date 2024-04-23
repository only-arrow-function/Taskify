import React, { useState } from 'react';
import DashboardListItem from './dashboard-list-item';
import NewDashboardModal from '../modal/new-dashboard-modal';
import DashboardPagination from '../pagination/dashboard-pagination';
import NewDashboardAddButton from '@/components/buttons/domain/new-dashboard-add-button';
import { useToggleStore } from '@/store/toggle-store';

const DashboardList = () => {
  const isToggle = useToggleStore((state) => state.isToggle);
  const handleOpenToggle = useToggleStore((state) => state.handleOpenToggle);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      {isToggle && <NewDashboardModal />}
      <section className="w-[80vw] my-6 ml-6 sm:w-[67vw] md:my-10 sm:ml-10 md:w-[70vw] xl:max-w-[1022px] lg:ml-10">
        <ul className="grid gap-[13px] md:grid-cols-2 lg:grid-cols-3">
          <li>
            <NewDashboardAddButton onOpenModal={handleOpenToggle} />
          </li>
          <DashboardListItem currentPage={currentPage} />
        </ul>
        <DashboardPagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
    </>
  );
};

export default DashboardList;
