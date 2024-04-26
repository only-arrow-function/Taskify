import { ComponentType, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getToken from '@/apis/localStorage';

const AuthHOC = (Component: ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const token = getToken();

    useEffect(() => {
      if (!token) router.push('/login');
    }, []);

    if (token) {
      return <Component {...props} />;
    }

    return null;
  };
};

export default AuthHOC;
