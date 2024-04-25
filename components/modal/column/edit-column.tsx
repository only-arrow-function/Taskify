import { useState } from 'react';
import { useRouter } from 'next/router';
import { KeyedMutator } from 'swr';
import columnRequest from '@/apis/column-request';
import InputField from '@/components/inputs/input-field';
import ModalButton from '@/components/modal/modal-button';
import ModalTitle from '@/components/modal/modal-title';
import { ColumnResponse } from '@/hooks/swr/column/use-column';
import { useColumnDuplicationTest } from '@/hooks/use-column-duplication-Test';
import { useHandleModalOutside } from '@/hooks/use-handle-modal';
import { useColumnStore } from '@/store/column';

interface NewColumnProp {
  onClose: () => void;
  data:
    | {
        data: ColumnResponse | undefined;
        isLoading: boolean;
        error: any;
        mutate: KeyedMutator<ColumnResponse>;
      }
    | undefined;
  columnId: string;
  columnTitle: string;
}

const EditColumn = ({ onClose, data, columnId, columnTitle }: NewColumnProp) => {
  const dashboardId = Number(useRouter().query.id);
  const { title, handleInputChange, removeTitle } = useColumnStore((state) => ({
    title: state.title,
    handleInputChange: state.handleInputChange,
    removeTitle: state.removeTitle,
  }));
  const [error, setError] = useState('');
  const modalRef = useHandleModalOutside(() => '', onClose);
  const handleCloseBtnClick = () => {
    onClose();
  };

  const handleInputBlur = () => {
    if (useColumnDuplicationTest(title, data?.data?.data)) {
      setError('중복된 컬럼 이름입니다.');
    } else {
      setError('');
    }
  };
  const handleEditBtnClick = async () => {
    if (typeof dashboardId !== 'number') return;
    await columnRequest.updateColumn({ title: title }, columnId);
    data?.mutate();
    onClose();
  };
  return (
    <div ref={modalRef}>
      <ModalTitle>컬럼 관리</ModalTitle>
      <InputField
        label="이름"
        type="text"
        id="title"
        value={title}
        placeholder="새로운 프로젝트"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        error={error}
      />
      <div className="sm:flex justify-between items-end">
        <span className="text-[14px] underline text-grayscale-50 mb-[16px] inline-block sm:mb cursor-pointer">
          삭제하기
        </span>
        <div className="flex justify-center gap-3 sm:justify-end">
          <ModalButton purpose="negative" disabled={false} onClick={() => handleCloseBtnClick()}>
            취소
          </ModalButton>
          <ModalButton purpose="positive" disabled={!title} onClick={() => handleEditBtnClick()}>
            수정
          </ModalButton>
        </div>
      </div>
    </div>
  );
};

export default EditColumn;
