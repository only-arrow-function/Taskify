import { parse } from 'cookie';
const getToken = () => {
  if (typeof window === 'undefined') return;

  const token = parse(document.cookie)['token'];

  if (!token) {
    console.log('토큰이 없어요');
    return;
  }

  return token;
};

export default getToken;
