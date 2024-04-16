import Image from 'next/image';

import AddIcon from '@/public/chips/add.svg';

const AddChip = () => {
  return (
    <div className="flex items-center justify-center gap-12px bg-violet-10 w-[20px] h-[20px] rounded">
      <Image src={AddIcon} alt="+" />
    </div>
  );
};

export default AddChip;
