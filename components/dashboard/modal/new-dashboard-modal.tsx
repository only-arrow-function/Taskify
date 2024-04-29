import { ChangeEvent, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import BasicButton from '@/components/buttons/basic-button';
import ColorChipGroup from '@/components/chips/color-chip-group';
import InputField from '@/components/inputs/input-field';
import Modal from '@/components/modal/modal';
//import ModalButtonGroup from '@/components/modal/modal-button-group'; // 레거시이므로, 삭제 부탁합니다.
import ModalTitle from '@/components/modal/modal-title';

import { useDashboardsMutation } from '@/hooks/react-query/use-query-dashboard';
import { useDashboardsStore } from '@/store/dashboard';
import { useToggleStore } from '@/store/toggle-store';

const NewDashboardModal = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleCloseToggle = useToggleStore((state) => state.handleCloseToggle);
  const color = useDashboardsStore((state) => state.color);

  // server state
  const queryClient = useQueryClient();
  const { mutateAsync } = useDashboardsMutation({ title: inputValue, color: color }, queryClient);

  // handler
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleClickForCreateDashboard = async () => {
    try {
      await mutateAsync();

      handleCloseToggle();
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  const handleInputBlur = () => setIsTouched(true);
  const isValidation = inputValue.trim().length !== 0;
  const hasError = isTouched && !isValidation ? '대시보드 이름을 입력해주세요.' : '';

  return (
    <Modal>
      <ModalTitle>새로운 대시보드</ModalTitle>
      <InputField
        type="text"
        label="대시보드 이름"
        id="new-dashboard"
        placeholder="새로운 프로젝트 이름을 입력하세요."
        error={hasError}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
      />
      <div className="mb-7">
        <ColorChipGroup />
      </div>
      <div className="flex flex-row gap-[10px] justify-end">
        <BasicButton purpose="negative" eventHandler={handleCloseToggle}>
          취소
        </BasicButton>
        <BasicButton purpose="positive" eventHandler={handleClickForCreateDashboard}>
          생성
        </BasicButton>
      </div>
    </Modal>
  );
};

export default NewDashboardModal;
