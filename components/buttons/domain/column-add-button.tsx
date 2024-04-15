import ColumnBase from './commons/column-base';
import AddChip from '@/components/chips/add-chip';

const ColumnAddButton = () => {
  return (
    <ColumnBase>
      <div className='flex items-center justify-center my-[10px] sm:my-[6px]'>
        <AddChip />
      </div>
    </ColumnBase>
  );
};

export default ColumnAddButton;
