import Image from 'next/image';

import ModalNewTodo from '../modal/modal-new-todo';
import Card from '@/components/card/card';

import { useHandleModal } from '@/hooks/use-handle-modal';
import addChips from '@/public/chips/add.svg';

const AddCard = () => {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();

  return (
    <Card>
      {isOpenModal && <ModalNewTodo handleCloseModal={handleCloseModal}/>}
      <div className="flex justify-center items-center gap-[12px]" onClick={handleOpenModal}>
        <div className="relative p-[3px] rounded-[4px] bg-violet-10 w-[22px] h-[22px]">
          <Image src={addChips} alt="addChips" fill />
        </div>
      </div>
    </Card>
  );
};

export default AddCard;
