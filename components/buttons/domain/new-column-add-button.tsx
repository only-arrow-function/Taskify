import ColumnBase from './commons/column-base';
import DomainButtonName from './commons/domain-button-name';
import AddChip from '@/components/chips/add-chip';

const NewColumnAddButton = () => {
  return (
    <ColumnBase>
      <div className='flex items-center justify-center gap-x-3 sm:h-[58px] h-[68px]'>
        <DomainButtonName purpose="column-add">
          새로운 칼럼 추가하기
        </DomainButtonName>
        <AddChip />
      </div>
    </ColumnBase>
  );
};

export default NewColumnAddButton;
