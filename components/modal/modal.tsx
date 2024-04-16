import { PropsWithChildren } from 'react';
import BackDrop from './backdrop';
import ModalLayout from './modal-layout';

const Modal = ({
  children,
  purpose,
}: PropsWithChildren<{ purpose?: 'newCard' }>) => {
  return (
    <>
      <BackDrop />
      <ModalLayout purpose={purpose}>{children}</ModalLayout>
    </>
  );
};

export default Modal;
