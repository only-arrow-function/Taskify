const getToken = () => {
  if (typeof window === 'undefined') return;

  const token = localStorage.getItem('accessToken');
  if (!token) return console.log('토큰이 없어요');

  return token;
};

export default getToken;
