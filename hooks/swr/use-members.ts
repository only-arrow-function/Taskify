import useSWR from 'swr';
import requests from '@/apis/request';

export const useGetMembers = () => {
  const { data, error, isLoading, mutate } = useSWR('members', requests.getMembers, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return { data, error, isLoading, mutate };
};
