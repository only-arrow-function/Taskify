import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import InputField from '@/components/inputs/input-field';
import PasswordInput from '@/components/inputs/password-input';
import { useLogin } from '@/hooks/swr/use-login';
import { useValidateLogin } from '@/hooks/use-validate-login';

import mainLogo from '@/public/logo/logo-main.svg';

const Login: React.FC = () => {
  const router = useRouter();
  
  // client state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { validateLogin, errors } = useValidateLogin();

  // server state
  const { data, trigger } = useLogin(email, password);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await validateLogin(email, password);
      await trigger();

      localStorage.setItem('accessToken', data.accessToken);
      router.push('/');
     } catch (e) {
      console.log("에러 발생")
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
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해 주세요"
          error={errors.email}
        />
        <PasswordInput
          label="비밀번호"
          id="password"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해 주세요"
          error={errors.password}
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
    </div>
  );
};

export default Login;
