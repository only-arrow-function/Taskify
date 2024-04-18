import { useEffect, useState } from "react";
import useSWR from 'swr';

import requests from '@/apis/request';

export const useGetInviteUsers = (dashboardid: string | string[] | undefined) => {
  if (typeof dashboardid !== "string") return ;
  const [token, setToken] = useState<string | null>(null);

  // 로컬 스토리지는 client 측에서 동작: 프리 렌더링 시, 에러가 발생할 수 있으므로, 아래와 같이 처리.
  useEffect(() => {
    const item = localStorage.getItem('accessToken');

    setToken(item);
  }, [token])

  const { data, error, isLoading, mutate } = useSWR(`${dashboardid}/invitations`, () => requests.getInviteUsers(`${dashboardid}/invitations`, token) , {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return { data, error, isLoading, mutate };
}
