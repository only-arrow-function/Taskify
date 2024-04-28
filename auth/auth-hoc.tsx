import { ComponentType, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getToken from '@/apis/cookie';

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

    return <Component {...props} />;
  };
};

export default AuthHOC;
