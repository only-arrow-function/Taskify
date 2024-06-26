import Image from 'next/image';

import ModalNewTodo from '../modal/modal-new-todo';
import Card from '@/components/card/card';

import { useHandleModal } from '@/hooks/use-handle-modal';
import addChips from '@/public/chips/add.svg';

interface AddCardProps {
  columnId: number;
}

const AddCard = (props: AddCardProps) => {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();

  return (
    <>
      {isOpenModal && <ModalNewTodo handleCloseModal={handleCloseModal} columnId={props.columnId} />}
      <Card>
        <div className="flex justify-center items-center gap-[12px] cursor-pointer" onClick={handleOpenModal}>
          <div className="relative p-[3px] rounded-[4px] bg-violet-10 w-[22px] h-[22px]">
            <Image src={addChips} alt="addChips" fill />
          </div>
        </div>
      </Card>
    </>
  );
};

export default AddCard;
