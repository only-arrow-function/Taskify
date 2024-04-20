import React from 'react';
import Modal from './modal';
import ModalButton from './modal-button';
import ModalDescription from './modal-description';
import { useToggleStore } from '@/store/toggle-store';

const NotificationModal = ({ message }: { message: string }) => {
  const { handleCloseToggle } = useToggleStore();

  return (
    <Modal>
      <div className="flex flex-col h-full justify-between">
        <ModalDescription text={message} />
        <div className="flex justify-center mt-[10px] sm:justify-end">
          <ModalButton disabled={false} purpose="positive" onClick={handleCloseToggle}>
            확인
          </ModalButton>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationModal;
