import React, { FormEvent, useEffect, useState } from 'react';
import userRequests from '@/apis/user-request';
import BasicButton from '@/components/buttons/basic-button';
import PasswordInput from '@/components/inputs/password-input';
import NotificationModal from '@/components/modal/notification-modal';
import { useFormValidation } from '@/hooks/use-authentication-validation';
import { useToggleStore } from '@/store/toggle-store';

interface MypagePasswordChangeFormProps {
  onNotification: (message: string) => void;
}

const MypagePasswordChangeForm = ({ onNotification }: MypagePasswordChangeFormProps) => {
  const {
    currentPassword,
    password,
    confirmPassword,
    setCurrentPassword,
    setPassword,
    setConfirmPassword,
    validateCurrentPassword,
    validatePassword,
    validateConfirmPassword,
  } = useFormValidation();

  useEffect(() => {
    validateConfirmPassword(password.value, confirmPassword.value);
  }, [password.value, confirmPassword.value]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const isCurrentPasswordValid = validateCurrentPassword();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword(password.value, confirmPassword.value);

    if (!isCurrentPasswordValid || !isPasswordValid || !isConfirmPasswordValid) {
      return;
    }

    try {
      await userRequests.editPassword(currentPassword.value, password.value);
      onNotification('비밀번호가 변경되었습니다.');
      setCurrentPassword('');
      setPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      onNotification(err.response?.data?.message || '알 수 없는 오류로 변경에 실패하였습니다.');
    }
  };

  return (
    <form
      className="w-[95%] max-w-[620px] mt-[25px] flex flex-col mx-auto md:mx-3 rounded-md shadow-md bg-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold pt-[32px] pl-[28px]">비밀번호 변경</h2>
      <div className="pt-[32px] pl-[28px] mr-[20px] sm:mr-[28px]">
        <PasswordInput
          label="현재 비밀번호"
          placeholder="현재 비밀번호 입력"
          autoComplete="current-password"
          value={currentPassword.value}
          onChange={(e) => setCurrentPassword(e.target.value)}
          onBlur={validateCurrentPassword}
          error={currentPassword.error}
        />
        <PasswordInput
          label="새 비밀번호"
          placeholder="새 비밀번호 입력"
          autoComplete="new-password"
          value={password.value}
          onChange={(e) => {
            setPassword(e.target.value);
            validateConfirmPassword(e.target.value, confirmPassword.value);
          }}
          error={password.error}
        />
        <PasswordInput
          label="새 비밀번호 확인"
          placeholder="새 비밀번호 입력"
          autoComplete="new-password"
          value={confirmPassword.value}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmPassword(password.value, e.target.value);
          }}
          error={confirmPassword.error}
        />
      </div>
      <div className="flex justify-end px-4 pb-[20px]">
        <BasicButton purpose="positive" type="submit">
          변경
        </BasicButton>
      </div>
    </form>
  );
};

export default MypagePasswordChangeForm;
