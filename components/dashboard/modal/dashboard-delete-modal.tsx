import { ChangeEvent, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import BasicButton from '@/components/buttons/basic-button';
import InputField from '@/components/inputs/input-field';
import ModalTitle from '@/components/modal/modal-title';
import ModalWithDimmed from '@/components/modal/modal-with-dimmed';

import { useDashboardDeleteMutation } from '@/hooks/react-query/use-query-dashboard';
import { useRouter } from 'next/router';

interface InviteModalType {
  handleCloseModal: () => void;
  dashboardId: number;
  page: number;
}

const DashboardDeleteModal = ({ handleCloseModal, dashboardId, page}: InviteModalType) => {
  const router = useRouter();

  // server state
  const queryClient = useQueryClient();
  const { mutateAsync } = useDashboardDeleteMutation(dashboardId, page, queryClient);

  const handleClickForDelete = async () => {
    try {
      await mutateAsync();
      
      router.push('/my-dashboard')
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  return (
    <ModalWithDimmed handleCloseModal={handleCloseModal}>
      <ModalTitle>대시보드를 삭제하시겠습니까?</ModalTitle>
      <div className="flex flex-row gap-[10px] justify-end">
        <BasicButton purpose="negative" eventHandler={handleCloseModal}>
          취소
        </BasicButton>
        <BasicButton purpose="positive" eventHandler={handleClickForDelete}>
          삭제
        </BasicButton>
      </div>
    </ModalWithDimmed>
  );
};

export default DashboardDeleteModal;
