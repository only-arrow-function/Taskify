import useCard from '@/hooks/swr/use-card';

const Popover = ({
  cardId,
  onClosePopover,
  onModifyButtonClick,
}: {
  cardId: number;
  onClosePopover: () => void;
  onModifyButtonClick: () => void;
}) => {
  const { deleteCard } = useCard(cardId);

  const handleDeleteButtonClick = () => {
    deleteCard();
    onClosePopover();
  };

  return (
    <ul className="absolute top-5 right-1 p-[6px] bg-white border border-grayscale-40 rounded-md shadow-popover w-[86px] md:top-7 md:w-[93px]">
      <li className="leading-[30px] w-full rounded-[4px] text-xs text-center md:leading-[32px] md:text-sm hover:bg-violet-10 hover:text-violet-50">
        <button onClick={onModifyButtonClick}>수정하기</button>
      </li>
      <li className="leading-[30px] w-full rounded-[4px] text-xs text-center md:leading-[32px] md:text-sm hover:bg-violet-10 hover:text-violet-50">
        <button onClick={handleDeleteButtonClick}>삭제하기</button>
      </li>
    </ul>
  );
};

export default Popover;
