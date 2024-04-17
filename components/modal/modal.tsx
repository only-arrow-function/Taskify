import { PropsWithChildren } from 'react';
import BackDrop from './backdrop';
import ModalLayout from './modal-layout';

const Modal = ({ children }: PropsWithChildren) => {
  return (
    <>
      <BackDrop />
      <ModalLayout>{children}</ModalLayout>
    </>
  );
};

export default Modal;
