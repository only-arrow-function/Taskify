import Image from 'next/image';
import Link from 'next/link';

const RendingHeaderLogo = () => {
  return (
    <h1 className="relative w-[121px] h-[39px]">
      <Link href="/" className="block">
        <Image src="/icon/header/header-logo.svg" alt="Taskify 아이콘" fill />
      </Link>
    </h1>
  );
};

export default RendingHeaderLogo;
