import SideMenuAddDashBoards from '@/components/side-menu/side-menu-add-dash-boards';
import SideMenuDashBoardsList from '@/components/side-menu/side-menu-dash-boards-list';
import SideMenuLogo from '@/components/side-menu/side-menu-logo';

const SideMenu = () => {
  return (
    <aside className="absolute top-0 left-0 z-10 w-[67px] sm:w-[160px] xl:w-[300px] h-screen border-grayscale-40 bg-white border-r-2 p-[20px]">
      <SideMenuLogo />
      <SideMenuAddDashBoards />
      <SideMenuDashBoardsList />
    </aside>
  );
};

export default SideMenu;
