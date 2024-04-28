import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import BasicButton from '../buttons/basic-button';
import getToken from '@/apis/cookie';

const RendingHeaderNavBar = () => {
  const [isToken, setIsToken] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  useEffect(() => {
    const token = getToken();
    setIsToken(!!token);
  }, []);

  const hanldeLogout = () => {
    removeCookie('token');
    setIsToken(false);
  };

  return (
    <nav>
      <ul className="flex text-sm items-center">
        <li>
          {isToken ? (
            <BasicButton eventHandler={hanldeLogout} purpose="positive">
              로그아웃
            </BasicButton>
          ) : (
            <Link
              className="text-white bg-violet-50 flex items-center justify-center gap-10px flex-shrink-0 rounded w-[109px] py-[7px] sm:w-[84px] sm:py-[6px]"
              href="/login"
            >
              로그인
            </Link>
          )}
        </li>
        <li className="ml-9 max-sm:ml-5">
          <Link href="/signup">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
};

export default RendingHeaderNavBar;
