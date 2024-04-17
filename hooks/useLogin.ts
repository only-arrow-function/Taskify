import { useState } from 'react';
import { useRouter } from 'next/router';
import requests from '@/apis/request';

export const useLogin = () => {
  const [errors, setErrors] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const router = useRouter();

  const login = async (email: string, password: string) => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrors((errors) => ({ ...errors, email: '유효한 이메일 주소를 입력해주세요.' }));
      return;
    }
    if (password.length < 8) {
      setErrors((errors) => ({ ...errors, password: '비밀번호는 8자 이상이어야 합니다.' }));
      return;
    }

    try {
      const response = await requests.login(email, password);
      localStorage.setItem('accessToken', response.accessToken);
      router.push('/');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return { login, errors };
};
