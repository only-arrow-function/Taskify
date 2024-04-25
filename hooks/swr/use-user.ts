import useSWR from 'swr';
import userRequests from '@/apis/user-request';

export function useUser() {
  const { data, error, mutate } = useSWR('user-info', userRequests.myInformation);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
