import { KeyedMutator } from 'swr';
import columnRequest from '@/apis/column-request';
import ModalButton from '@/components/modal/modal-button';
import { ColumnResponse } from '@/hooks/swr/column/use-column';

interface RemoveColumnProp {
  onClose: () => void;
  columnId: string;
  columnMutate: KeyedMutator<ColumnResponse> | undefined;
}

const RemoveColumn = ({ onClose, columnId, columnMutate }: RemoveColumnProp) => {
  const handleCloseBtnClick = () => {
    onClose();
  };
  const handleRemoveBtnClick = async () => {
    try {
      await columnRequest.deleteColumn(Number(columnId));
      if (columnMutate) {
        columnMutate();
      } else {
        console.log('mutate가 undefined입니다');
      }
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center py-[50px]">
        <h3 className="text-[16px] sm:text-[18px] text-grayscale-80">컬럼의 모든 카드가 삭제됩니다.</h3>
      </div>
      <div className="flex justify-center gap-3 sm:justify-end">
        <ModalButton purpose="negative" disabled={false} onClick={() => handleCloseBtnClick()}>
          취소
        </ModalButton>
        <ModalButton purpose="positive" disabled={false} onClick={() => handleRemoveBtnClick()}>
          삭제
        </ModalButton>
      </div>
    </>
  );
};

export default RemoveColumn;
