import React, { useEffect, useRef } from 'react';
import Modal from './modal';
import ModalButton from './modal-button';
import ModalDescription from './modal-description';
import { useToggleStore } from '@/store/toggle-store';

const NotificationModal = ({ message }: { message: string }) => {
  const { handleCloseToggle } = useToggleStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef<number>(0);

  useEffect(() => {
    scrollPosition.current = window.scrollY;
    modalRef.current?.focus();

    return () => {
      window.scrollTo({ top: scrollPosition.current });
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleCloseToggle();
    }
  };

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className="outline-none"
      onFocus={() => window.scrollTo({ top: scrollPosition.current })}
    >
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
    </div>
  );
};

export default NotificationModal;
