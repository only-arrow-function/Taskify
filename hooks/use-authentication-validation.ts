import { useState } from 'react';

interface ValidationState {
  value: string;
  error: string;
}

interface FormValidation {
  email: ValidationState;
  currentPassword: ValidationState;
  password: ValidationState;
  confirmPassword: ValidationState;
  nickname: ValidationState;
  setEmail: (email: string) => void;
  setCurrentPassword: (password: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setNickname: (nickname: string) => void;
  validateEmail: () => boolean;
  validateCurrentPassword: () => boolean;
  validatePassword: () => boolean;
  validateConfirmPassword: (pwd: string, confirmPwd: string) => boolean;
  validateNickname: () => boolean;
}

export function useFormValidation(): FormValidation {
  const [email, setEmailState] = useState<ValidationState>({ value: '', error: '' });
  const [currentPassword, setCurrentPasswordState] = useState<ValidationState>({ value: '', error: '' });
  const [password, setPasswordState] = useState<ValidationState>({ value: '', error: '' });
  const [confirmPassword, setConfirmPasswordState] = useState<ValidationState>({ value: '', error: '' });
  const [nickname, setNicknameState] = useState<ValidationState>({ value: '', error: '' });

  const setEmail = (value: string) => setEmailState({ value, error: '' });
  const setCurrentPassword = (value: string) => setCurrentPasswordState({ value, error: '' });
  const setPassword = (value: string) => {
    setPasswordState({ value, error: '' });
    validateConfirmPassword(value, confirmPassword.value);
  };
  const setConfirmPassword = (value: string) => {
    setConfirmPasswordState({ value, error: '' });
    validateConfirmPassword(password.value, value);
  };
  const setNickname = (value: string) => setNicknameState({ value, error: '' });

  const validateEmail = (): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.value)) {
      setEmailState({ ...email, error: '이메일 형식으로 작성해 주세요.' });
      return false;
    }
    setEmailState({ ...email, error: '' });
    return true;
  };

  const validateCurrentPassword = (): boolean => {
    if (currentPassword.value.length < 8) {
      setCurrentPasswordState({ ...currentPassword, error: '8자 이상 입력해 주세요.' });
      return false;
    }
    setCurrentPasswordState({ ...currentPassword, error: '' });
    return true;
  };

  const validatePassword = (): boolean => {
    if (password.value.length < 8) {
      setPasswordState({ ...password, error: '8자 이상 입력해 주세요.' });
      return false;
    }
    setPasswordState({ ...password, error: '' });
    return true;
  };

  const validateConfirmPassword = (pwd: string, confirmPwd: string) => {
    const errorMessage = pwd !== confirmPwd ? '비밀번호가 일치하지 않습니다.' : '';
    setConfirmPasswordState({ value: confirmPwd, error: errorMessage });
    return errorMessage === '';
  };

  const validateNickname = (): boolean => {
    if (!nickname.value) {
      setNicknameState({ ...nickname, error: '닉네임을 입력해주세요.' });
      return false;
    }
    setNicknameState({ ...nickname, error: '' });
    return true;
  };

  return {
    email,
    currentPassword,
    password,
    confirmPassword,
    nickname,
    setEmail,
    setCurrentPassword,
    setPassword,
    setConfirmPassword,
    setNickname,
    validateEmail,
    validateCurrentPassword,
    validatePassword,
    validateConfirmPassword,
    validateNickname,
  };
}
