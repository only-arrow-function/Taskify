import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { KeyedMutator } from 'swr';
import columnRequest from '@/apis/column-request';
import InputField from '@/components/inputs/input-field';
import ModalButton from '@/components/modal/modal-button';
import ModalTitle from '@/components/modal/modal-title';
import { ColumnResponse } from '@/hooks/swr/column/use-column';
import { useColumnDuplicationTest } from '@/hooks/use-column-duplication-Test';
import { useHandleModalOutside } from '@/hooks/use-handle-modal';

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
}

const NewColumn = ({ onClose, data }: NewColumnProp) => {
  const dashboardId = Number(useRouter().query.id);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const modalRef = useHandleModalOutside(() => '', onClose);
  const handleCloseBtnClick = () => {
    onClose();
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleInputBlur = () => {
    if (useColumnDuplicationTest(title, data?.data?.data)) {
      setError('중복된 컬럼 이름입니다.');
    } else {
      setError('');
    }
  };
  const handleCreateBtnClick = async () => {
    if (useColumnDuplicationTest(title, data?.data?.data)) {
      setError('중복된 컬럼 이름입니다.');
      return;
    }
    try {
      if (typeof dashboardId !== 'number') return;
      await columnRequest.createColumn({ title: title, dashboardId: dashboardId });
      data?.mutate();
      onClose();
    } catch (error) {
      setError('컬럼생성을 실패했습니다');
    }
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
