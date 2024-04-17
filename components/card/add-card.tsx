import Image from 'next/image';
import Card from '@/components/card/card';
import addChips from '@/public/chips/add.svg';

interface AddCardProp {
  isText?: boolean;
}

const AddCard = ({ isText = false }: AddCardProp) => {
  return (
    <Card>
      <div className="flex justify-center items-center gap-[12px]">
        {isText && <h3 className="mt-1 text-[18px] font-bold">새로운 컬럼 추가하기</h3>}
        <div className="relative p-[3px] rounded-[4px] bg-violet-10 w-[22px] h-[22px]">
          <Image src={addChips} alt="addChips" fill />
        </div>
      </div>
    </Card>
  );
};

export default AddCard;
