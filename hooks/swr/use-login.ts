import useSWRMutation from 'swr/mutation';
import requests from '@/apis/request';

export const useLogin = (email: string, password: string) => {
  const getKey = () => (email && password ? ['auth/login', email, password] : null);

  const { data, error, trigger } = useSWRMutation(getKey, () => requests.login(email, password), {
    revalidate: false,
  });

  return { data, error, trigger };
};
