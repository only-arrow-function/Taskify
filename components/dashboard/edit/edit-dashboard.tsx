import { useRouter } from 'next/router';

import requests from '@/apis/request';
import BasicButton from '@/components/buttons/basic-button';
import ColorChipGroup from '@/components/chips/color-chip-group';
import InputField from '@/components/inputs/input-field';
import ModalTitle from '@/components/modal/modal-title';

import { DashboardIdProps } from '@/constant/type/data/dashboard.type';
import { useDashboardsStore } from '@/store/dashboard';

const EditDashboard = ({ dashboardId }: DashboardIdProps) => {
  const { title, color, handleInputChange, resetTitle } = useDashboardsStore();

  const handlePostRename = async () => {
    const result = await requests.editDashboard(dashboardId, { title: title, color: color });
    // 여기에 토스트 처리 추가 가능.

    resetTitle();
  };

  return (
    <section className="bg-white rounded-lg px-[15px] py-[15px]">
      <div className="flex flex-row justify-between">
        <ModalTitle>비브리지</ModalTitle>
        <ColorChipGroup />
      </div>
      <InputField
        type="text"
        label="대시보드 이름"
        id="new-dashboard"
        placeholder="변경할 프로젝트 이름을 입력하세요."
        onChange={handleInputChange}
        value={title}
      />
      <div className="flex justify-end">
        <BasicButton purpose="positive" eventHandler={handlePostRename}>
          변경
        </BasicButton>
      </div>
    </section>
  );
};

export default EditDashboard;