import { useState } from 'react';
import { useRouter } from 'next/router';
import { KeyedMutator } from 'swr';
import requests from '@/apis/request';
import InputField from '@/components/inputs/input-field';
import ModalButton from '@/components/modal/modal-button';
import ModalTitle from '@/components/modal/modal-title';
import { ColumnResponse } from '@/hooks/swr/column/use-column';
import { useHandleModalOutside } from '@/hooks/use-handle-modal';
import { useColumnStore } from '@/store/column';

interface NewColumnProp {
  onClose: () => void;
  onTest: (columnTitle: string) => boolean;
  data: {
    data: ColumnResponse | undefined;
    isLoading: boolean;
    error: any;
    mutate: KeyedMutator<ColumnResponse>;
  };
}

const NewColumn = ({ onClose, onTest, data }: NewColumnProp) => {
  const dashboardId = Number(useRouter().query.id);

  const { title, handleInputChange } = useColumnStore((state) => ({
    title: state.title,
    handleInputChange: state.handleInputChange,
  }));
  const [error, setError] = useState('');
  const modalRef = useHandleModalOutside(() => '', onClose);
  const handleCloseBtnClick = () => {
    onClose();
  };
  const handleInputBlur = () => {
    if (onTest(title)) {
      setError('중복된 컬럼 이름입니다.');
    } else {
      setError('');
    }
  };
  const handleCreateBtnClick = async () => {
    if (typeof dashboardId !== 'number') return;
    await requests.createColumn({ title: title, dashboardId: dashboardId });
    data.mutate();
    onClose();
  };
  return (
    <div ref={modalRef}>
      <ModalTitle>새 컬럼 생성</ModalTitle>
      <InputField
        label="이름"
        type="text"
        id="title"
        placeholder="새로운 프로젝트"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        error={error}
      />
      <div className="flex justify-center gap-3 sm:justify-end">
        <ModalButton purpose="negative" disabled={false} onClick={handleCloseBtnClick}>
          취소
        </ModalButton>
        <ModalButton purpose="positive" disabled={!title} onClick={handleCreateBtnClick}>
          생성
        </ModalButton>
      </div>
    </div>
  );
};

export default NewColumn;
