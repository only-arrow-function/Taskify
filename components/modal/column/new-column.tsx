import { ChangeEvent, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { ColumnResponse } from './columns-data.type';
import InputField from '@/components/inputs/input-field';
import ModalButton from '@/components/modal/modal-button';
import ModalTitle from '@/components/modal/modal-title';

import { useColumnsCreateMutation } from '@/hooks/react-query/use-query-columns';
import { useColumnDuplicationTest } from '@/hooks/use-column-duplication-Test';
import { useHandleModalOutside } from '@/hooks/use-handle-modal';

interface NewColumnProp {
  onClose: () => void;
  data: ColumnResponse | undefined;
}

const NewColumn = ({ onClose, data }: NewColumnProp) => {
  const dashboardId = Number(useRouter().query.id);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const modalRef = useHandleModalOutside(() => '', onClose);

  // server state
  const queryClient = useQueryClient();
  const { mutateAsync } = useColumnsCreateMutation({ title, dashboardId }, queryClient);

  const handleCloseBtnClick = () => {
    onClose();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleInputBlur = () => {
    if (useColumnDuplicationTest(title, data?.data)) {
      setError('중복된 컬럼 이름입니다.');
    } else {
      setError('');
    }
  };

  const handleCreateBtnClick = async () => {
    if (useColumnDuplicationTest(title, data?.data)) {
      setError('중복된 컬럼 이름입니다.');
      return;
    }

    try {
      mutateAsync();

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
