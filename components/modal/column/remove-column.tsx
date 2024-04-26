import { useQueryClient } from "@tanstack/react-query";

import columnRequest from '@/apis/column-request';
import ModalButton from '@/components/modal/modal-button';
import { useColumnsDeleteMutation } from '@/hooks/react-query/use-query-columns';

interface RemoveColumnProp {
  onClose: () => void;
  columnId: string;
  dashboardId: number;
}

const RemoveColumn = ({ onClose, columnId, dashboardId }: RemoveColumnProp) => {
  //server state
  const queryClient = useQueryClient();
  const { mutateAsync } = useColumnsDeleteMutation(Number(columnId), dashboardId, queryClient);

  const handleRemoveBtnClick = async () => {
    try {
      await mutateAsync();
      
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
        <ModalButton purpose="negative" disabled={false} onClick={onClose}>
          취소
        </ModalButton>
        <ModalButton purpose="positive" disabled={false} onClick={handleRemoveBtnClick}>
          삭제
        </ModalButton>
      </div>
    </>
  );
};

export default RemoveColumn;
