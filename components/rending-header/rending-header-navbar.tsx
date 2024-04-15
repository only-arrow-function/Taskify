import Link from 'next/link';

const RendingHeaderNavBar = () => {
  return (
    <nav>
      <ul className="flex ">
        <li>
          <Link href="/auth/signIn">로그인</Link>
        </li>
        <li className="ml-9">
          <Link href="/auth/signUp">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
};

export default RendingHeaderNavBar;
