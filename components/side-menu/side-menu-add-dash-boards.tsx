import Image from 'next/image';
import addBox from '@/public/icon/add-box.svg';

const SideMenuAddDashBoards = () => {
  const addText = 'Dash Boards';
  return (
    <div className="w-full flex justify-between items-center mb-[22px] sm:mb-[15px]">
      <p className="hidden sm:block text-[12px] font-bold font-[Pretendard] text-grayscale-60">
        {addText}
      </p>
      <div className="relative w-[20px] h-[20px] ml-[2px] sm:ml-0">
        <Image src={addBox} alt="addBox" fill />
      </div>
    </div>
  );
};

export default SideMenuAddDashBoards;
