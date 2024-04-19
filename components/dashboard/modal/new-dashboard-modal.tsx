import React from 'react';
import ColorChipGroup from '@/components/chips/color-chip-group';
import InputField from '@/components/inputs/input-field';
import Modal from '@/components/modal/modal';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalTitle from '@/components/modal/modal-title';
import { useDashboardsStore } from '@/store/dashboard';

const NewDashboardModal = () => {
  const handleInputChange = useDashboardsStore((state) => state.handleInputChange);

  return (
    <Modal>
      <ModalTitle>새로운 대시보드</ModalTitle>
      <InputField
        type="text"
        label="대시보드 이름"
        id="new-dashboard"
        placeholder="새로운 프로젝트 이름을 입력하세요."
        onChange={handleInputChange}
      />
      <div className="mb-7">
        <ColorChipGroup />
      </div>
      <ModalButtonGroup positiveName="생성" />
    </Modal>
  );
};

export default NewDashboardModal;
