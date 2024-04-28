import { useState } from 'react';
import { useRouter } from 'next/router';
import requests from '@/apis/request';
import InputField from '@/components/inputs/input-field';
import ModalButton from '@/components/modal/modal-button';
import ModalTitle from '@/components/modal/modal-title';
import { useInviteStore } from '@/store/invite';
import { useToggleStore } from '@/store/toggle-store';

const SendInvite = () => {
  const { email, handleInputChange } = useInviteStore((state) => ({
    email: state.email,
    handleInputChange: state.handleInputChange,
  }));
  const dashboardId = String(useRouter().query.id);

  const handleCloseToggle = useToggleStore((state) => state.handleCloseToggle);
  const [error, setError] = useState('');
  const handleInviteClick = async () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('유효한 이메일 형식을 입력해 주세요.');
      return;
    }
    await requests.sendInvite({ email }, dashboardId);
    handleCloseToggle();
  };

  return (
    <>
      <ModalTitle>초대하기</ModalTitle>
      <InputField
        label="이메일"
        type="email"
        id="email"
        placeholder="codeit@codeit.com"
        onChange={handleInputChange}
        error={error}
      />
      <div className="flex justify-center gap-3 sm:justify-end">
        <ModalButton purpose="negative" disabled={false}>
          취소
        </ModalButton>
        <ModalButton purpose="positive" disabled={!email} onClick={() => handleInviteClick()}>
          초대
        </ModalButton>
      </div>
    </>
  );
};

export default SendInvite;
