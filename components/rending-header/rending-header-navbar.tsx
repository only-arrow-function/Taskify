import Link from 'next/link';

const RendingHeaderNavBar = () => {
  return (
    <nav>
      <ul className="flex text-sm">
        <li>
          <Link href="/login">로그인</Link>
        </li>
        <li className="ml-9 max-sm:ml-5">
          <Link href="/signUp">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
};

export default RendingHeaderNavBar;
