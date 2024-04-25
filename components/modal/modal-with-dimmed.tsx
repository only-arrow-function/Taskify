import { ReactNode } from 'react';
import Dimmed from './dimmed';
import ModalLayout from './modal-layout';

interface ModalWithDimmedType {
  children: ReactNode;
  handleCloseModal: () => void;
}

const ModalWithDimmed = ({ children, handleCloseModal }: ModalWithDimmedType) => {
  return (
    <>
      <Dimmed handleCloseModal={handleCloseModal} />
      <ModalLayout>{children}</ModalLayout>
    </>
  );
};

export default ModalWithDimmed;