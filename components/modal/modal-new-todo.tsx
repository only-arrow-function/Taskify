import { PropsWithChildren } from 'react';
import BackDrop from './backdrop';
import ModalNewTodoLayout from './modal-newTodo-layout';

const ModalNewTodo = ({ children }: PropsWithChildren) => {
  return (
    <>
      <BackDrop />
      <ModalNewTodoLayout>{children}</ModalNewTodoLayout>
    </>
  );
};

export default ModalNewTodo;
