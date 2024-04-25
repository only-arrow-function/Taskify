//import CardList from '@/components/card/card-list';
import EditColumn from '@/components/modal/column/edit-column';
import NewColumn from '@/components/modal/column/new-column';
import RemoveColumn from '@/components/modal/column/remove-column';
import SendInvite from '@/components/modal/invite/send-invite';
import Modal from '@/components/modal/modal';
//import RendingHeader from '@/components/rending-header/rending-header';
//import SideMenu from '@/components/side-menu/side-menu';

const TestSideMenu = () => {
  return (
    <>
      <Modal>
        <RemoveColumn />
        <EditColumn />
        <NewColumn />
        <SendInvite />
      </Modal>
    </>
  );
};

export default TestSideMenu;
