import useSWRMutation from 'swr/mutation'

import requests from '@/apis/request';

export const useLogin = (email: string, password: string) => {
  const getKey = () => email && password ? ['auth/login', email, password] : null;

  const { data, error, trigger } = useSWRMutation(getKey(), () => requests.login(email, password) , {
    revalidate: false,
  });

  return { data, error, trigger };
}; // 예외 처리는 담당하지 않습니다. 해당 함수는 swr을 통해, post 요청을 보내고, 뮤테이트와 캐싱만 담당하는 역할입니다.
// 예외 처리는 다른 커스텀 훅에서 담당하도록 분리합니다.
