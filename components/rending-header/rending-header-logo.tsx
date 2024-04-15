import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/public/icon/header/header-logo.svg';

const RendingHeaderLogo = () => {
  return (
    <h1 className="relative w-[121px] h-[39px]">
      <Link href="/" className="block">
        <Image src={logoImage} alt="Taskify 아이콘" fill />
      </Link>
    </h1>
  );
};

export default RendingHeaderLogo;
