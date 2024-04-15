import Image from 'next/image';
import Link from 'next/link';
import largeLogoImage from '@/public/icon/rending-header/rending-header-logo-large.svg';
import smallLogoImage from '@/public/icon/rending-header/rending-header-logo-small.svg';

const RendingHeaderLogo = () => {
  return (
    <h1 className="relative w-[121px] h-[39px] max-sm:w-[24px] max-sm:h-[27px]">
      <Link href="/" className="block">
        <picture>
          <source media={`(max-width: 640px)`} srcSet={smallLogoImage.src} />
          <source media={`(max-width: 1280px)`} srcSet={largeLogoImage.src} />
          <Image src={largeLogoImage} alt="Taskify 아이콘" fill />
        </picture>
      </Link>
    </h1>
  );
};

export default RendingHeaderLogo;
