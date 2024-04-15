import Image from 'next/image';
import Link from 'next/link';
import bigLogoImage from '@/public/icon/header/header-logo.svg';
import smallLogoImage from '@/public/logo/logo-small.svg';

const RendingHeaderLogo = () => {
  return (
    <h1 className="relative w-[121px] h-[39px] max-sm:w-[24px] max-sm:h-[27px]">
      <Link href="/" className="block">
        <picture>
          <source media={`(max-width: 640px)`} srcSet={smallLogoImage.src} />
          <source media={`(max-width: 1280px)`} srcSet={bigLogoImage.src} />
          <Image src={bigLogoImage} alt="Taskify 아이콘" fill />
        </picture>
      </Link>
    </h1>
  );
};

export default RendingHeaderLogo;
