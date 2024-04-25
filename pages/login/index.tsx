import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import requests from '@/apis/request';
import InputField from '@/components/inputs/input-field';
import PasswordInput from '@/components/inputs/password-input';
import NotificationModal from '@/components/modal/notification-modal';
import { useFormValidation } from '@/hooks/use-authentication-validation';
import mainLogo from '@/public/logo/logo-main.svg';
import { useAuthenticationStore } from '@/store/auth';
import { useToggleStore } from '@/store/toggle-store';

const Login = () => {
  const router = useRouter();
  const { isToggle, handleOpenToggle } = useToggleStore();
  const { email, password, setEmail, setPassword, validateEmail, validatePassword } = useFormValidation();
  const [notificationMessage, setnotificationMessage] = useState('');

  const setAuthentication = useAuthenticationStore((state) => state.setAuthentication);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      const response = await requests.login(email.value, password.value);
      localStorage.setItem('accessToken', response.accessToken);
      setAuthentication(response.user);
      router.push('/my-dashboard');
    } catch (err: any) {
      handleOpenToggle();
      setnotificationMessage(err.response.data.message || '알수없는 오류로 로그인에 실패하였습니다.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
      <div className="w-[120px] h-[167px] sm:w-[200px] sm:h-[279px]">
        <Link href="/" className="cursor-pointer">
          <img src={mainLogo.src} alt="Taskify Logo" />
        </Link>
      </div>
      <p className="text-center mb-[38px] text-xl font-medium text-grayscale-80">오늘도 만나서 반가워요!</p>
      <form onSubmit={handleSubmit}>
        <InputField
          label="이메일"
          id="email"
          type="email"
          value={email.value}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          autoComplete="email"
          placeholder="이메일을 입력해 주세요"
          error={email.error}
        />
        <PasswordInput
          label="비밀번호"
          id="password"
          type="password"
          value={password.value}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
          autoComplete="current-password"
          placeholder="비밀번호를 입력해 주세요"
          error={password.error}
        />
        <button
          className="w-[351px] sm:w-[520px] h-[50px] py-[14px] bg-violet-50 rounded-md text-white text-lg font-500"
          type="submit"
        >
          로그인
        </button>
      </form>
      <p className="mt-[24px]">
        회원이 아니신가요?&nbsp;
        <Link href="/signup" className="underline text-violet-50">
          회원가입하기
        </Link>
      </p>
      {isToggle && <NotificationModal message={notificationMessage} />}
    </div>
  );
};

export default Login;
