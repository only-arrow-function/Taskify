import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import requests from '@/apis/request';
import InputField from '@/components/inputs/input-field';
import PasswordInput from '@/components/inputs/password-input';
import { useFormValidation } from '@/hooks/use-authentication-validation';
import mainLogo from '@/public/logo/logo-main.svg';
import { useToggleStore } from '@/store/toggle-store';

const Signup = () => {
  const router = useRouter();
  const {
    email,
    nickname,
    password,
    confirmPassword,
    setEmail,
    setNickname,
    setPassword,
    setConfirmPassword,
    validateEmail,
    validateNickname,
    validatePassword,
    validateConfirmPassword,
  } = useFormValidation();
  const { isToggle, handleOpenToggle } = useToggleStore();
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState<string>('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAgreed(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!termsAgreed) {
      setNotificationMessage('약관 동의가 필요합니다.');
      handleOpenToggle();
      return;
    }

    const isEmailValid = validateEmail();
    const isNicknameValid = validateNickname();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword(password.value, confirmPassword.value);

    if (!isEmailValid || !isNicknameValid || !isPasswordValid || !isConfirmPasswordValid) {
      return;
    }

    try {
      await requests.signup(email.value, nickname.value, password.value);
      router.push('/');
    } catch (err: any) {
      setNotificationMessage(err.response?.data?.message || '알 수 없는 오류로 회원가입에 실패하였습니다.');
      handleOpenToggle();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full p-4">
      <div className="w-[120px] h-[167px] sm:w-[180px] sm:h-[220px] sm:mb-8">
        <Link href="/" className="cursor-pointer">
          <img src={mainLogo.src} alt="Taskify Logo" />
        </Link>
      </div>
      <p className="text-center mb-4 text-xl font-medium text-grayscale-80">첫 방문을 환영합니다!</p>
      <form className="w-full max-w-[520px]" onSubmit={handleSubmit}>
        <InputField
          label="이메일"
          id="email"
          type="email"
          value={email.value}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          placeholder="이메일을 입력해 주세요"
          error={email.error}
        />
        <InputField
          label="닉네임"
          id="nickname"
          type="text"
          value={nickname.value}
          autoComplete="username"
          onChange={(e) => setNickname(e.target.value)}
          onBlur={validateNickname}
          placeholder="닉네임을 입력해 주세요"
          error={nickname.error}
        />
        <PasswordInput
          label="비밀번호"
          id="password"
          type="password"
          value={password.value}
          autoComplete="new-password"
          onChange={(e) => {
            setPassword(e.target.value);
            validateConfirmPassword(e.target.value, confirmPassword.value);
          }}
          placeholder="8자 이상 입력해 주세요"
          error={password.error}
        />
        <PasswordInput
          label="비밀번호 확인"
          id="confirmPassword"
          type="password"
          value={confirmPassword.value}
          autoComplete="new-password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmPassword(password.value, e.target.value);
          }}
          placeholder="비밀번호를 한번 더 입력해 주세요"
          error={confirmPassword.error}
        />
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="terms"
            checked={termsAgreed}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-violet-600 bg-gray-100 rounded border-gray-300 focus:ring-violet-500"
          />
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-700">
            이용약관에 동의합니다.
          </label>
        </div>
        <button className="mt-4 w-full h-12 px-6 py-2 text-white bg-violet-50 rounded-md font-medium" type="submit">
          가입하기
        </button>
      </form>
      <p className="mt-4">
        이미 가입하셨나요?&nbsp;
        <Link href="/login" className="underline text-violet-50">
          로그인하기
        </Link>
      </p>
      {isToggle && <NotificationModal message={notificationMessage} />}
    </div>
  );
};

export default Signup;
