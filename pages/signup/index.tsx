import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import InputField from '@/components/inputs/input-field';
import PasswordInput from '@/components/inputs/password-input';
import useSignup from '@/hooks/use-signup';
import mainLogo from '@/public/logo/logo-main.svg';

type FormData = {
  email: string;
  nickName: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    nickName: '',
    password: '',
    confirmPassword: '',
  });

  const [termsAgreed, setTermsAgreed] = useState(false);
  const { signup, isLoading, error } = useSignup();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAgreed(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!termsAgreed) {
      alert('약관 동의가 필요합니다.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      const { email, nickName, password } = formData;
      const data = await signup(email, nickName, password);
      console.log(data);
      alert('회원가입 성공');
      router.push('/login');
    } catch (err) {
      // 에러 처리 로직
      alert(`회원가입 실패: ${error || '서버 에러'}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="w-[120px] h-[167px] sm:w-[200px] sm:h-[279px]">
        <Link href="/" className="cursor-pointer">
          <img src={mainLogo.src} alt="Taskify Logo" />
        </Link>
      </div>
      <p className="text-center mb-[38px] text-xl font-medium text-grayscale-80">첫 방문을 환영합니다!</p>
      <form className="w-[351px] sm:w-[520px]" onSubmit={handleSubmit}>
        <InputField
          label="이메일"
          id="email"
          type="email"
          value={formData.email}
          autoComplete="email"
          onChange={handleChange}
          placeholder="이메일을 입력해 주세요"
        />
        <InputField
          label="닉네임"
          id="nickName"
          type="text"
          value={formData.nickName}
          autoComplete="username"
          onChange={handleChange}
          placeholder="닉네임을 입력해 주세요"
        />
        <PasswordInput
          label="비밀번호"
          id="password"
          type="password"
          value={formData.password}
          autoComplete="new-password"
          onChange={handleChange}
          placeholder="비밀번호를 입력해 주세요"
        />
        <PasswordInput
          label="비밀번호 확인"
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          autoComplete="new-password"
          onChange={handleChange}
          placeholder="비밀번호를 다시 입력해 주세요"
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
        <button
          className="mt-4 w-full h-12 px-6 py-2 text-white bg-violet-50 rounded-md font-medium"
          type="submit"
          disabled={isLoading}
        >
          가입하기
        </button>
      </form>
      <p className="mt-4 mb-[160px]">
        이미 가입하셨나요?&nbsp;
        <Link href="/login" className="underline text-violet-50">
          로그인하기
        </Link>
      </p>
    </div>
  );
};

export default Signup;
