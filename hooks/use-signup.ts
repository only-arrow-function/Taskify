import { useState } from 'react';
import requests from '@/apis/request';

const useSignup = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email: string, nickname: string, password: string) => {
    setLoading(true);
    try {
      const data = await requests.signup(email, nickname, password);
      setLoading(false);
      return data;
    } catch (err: any) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return {
    signup,
    isLoading,
    error,
  };
};

export default useSignup;
