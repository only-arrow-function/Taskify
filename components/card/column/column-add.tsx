import AddCard from '@/components/card/add-card';
import CardListLayout from '@/components/card/card-list-layout';

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
        <AddCard isColumn={true} onClick={handleCardClick} />
      </div>
    </CardListLayout>
  );
};

export default ColumnAdd;
