import Image from 'next/image';
import addBox from '@/public/icon/add-box.svg';

const SideMenuAddDashBoards = () => {
  const addText = 'Dash Boards';
  return (
    <div className="w-full flex justify-between items-center mb-[22px] sm:mb-[15px]">
      <h3 className="hidden sm:block text-[12px] font-bold text-grayscale-60">
        {addText}
      </h3>
      <div className="relative w-[20px] h-[20px] ml-[2px] sm:ml-0">
        <Image src={addBox} alt="addBox" fill />
      </div>
    </div>
  );
};

export default SideMenuAddDashBoards;
