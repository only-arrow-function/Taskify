import Image from 'next/image';

import Card from '@/components/card/card';
import CardListLayout from '@/components/card/card-list-layout';

import addChips from '@/public/chips/add.svg';

interface ColumnAddProp {
  onClick: () => void;
}

const ColumnAdd = ({ onClick }: ColumnAddProp) => {
  const handleCardClick = () => {
    onClick();
  };
  return (
    <CardListLayout>
      <div className="xl:pt-[40px]">
        <Card>
          <div className="flex justify-center items-center gap-[12px]" onClick={handleCardClick}>
            <h4 className="font-bold text-grayscale-80 text-[18px]">새로운 컬럼 추가하기</h4>
            <div className="relative p-[3px] rounded-[4px] bg-violet-10 w-[22px] h-[22px]">
              <Image src={addChips} alt="addChips" fill />
            </div>
          </div>
        </Card>
      </div>
    </CardListLayout>
  );
};

export default ColumnAdd;
