import { useState } from 'react';

export const useLogin = () => {
  const [errors, setErrors] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const login = async (email: string, password: string) => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrors((errors) => ({ ...errors, email: '유효한 이메일 주소를 입력해주세요.' }));
      throw new Error('유효한 이메일 주소를 입력해주세요.');
    }
    if (password.length < 8) {
      setErrors((errors) => ({ ...errors, password: '비밀번호는 8자 이상이어야 합니다.' }));
      throw new Error('비밀번호는 8자 이상이어야 합니다.');
    }
  };

  return { login, errors };
};
