import NewDashboardModal from '../dashboard/modal/new-dashboard-modal';
import SideMenuAddDashBoards from '@/components/side-menu/side-menu-add-dash-boards';
import SideMenuDashBoardsList from '@/components/side-menu/side-menu-dash-boards-list';
import SideMenuLogo from '@/components/side-menu/side-menu-logo';
import { useToggleStore } from '@/store/toggle-store';

const SideMenu = ({page}: {page: number}) => {
  const isToggle = useToggleStore((state) => state.isToggle);
  const handleOpenToggle = useToggleStore((state) => state.handleOpenToggle);

  return (
    <aside
      className="fixed top-0 left-0 z-10 w-[67px] sm:w-[21.505vw] lg:w-[15.625vw] h-screen border-grayscale-40 bg-white border-r-2 p-[20px]
    "
    >
      <SideMenuLogo />
      <SideMenuAddDashBoards handleOpenModal={handleOpenToggle}/>
      <SideMenuDashBoardsList page={page}/>
      {isToggle && <NewDashboardModal/>}
    </aside>
  );
};

export default SideMenu;
