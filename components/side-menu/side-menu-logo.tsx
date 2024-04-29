import Link from 'next/link';
import smallLogo from '@/public/logo/logo-small.svg';
import largeLogo from '@/public/logo/logo-with-title-large.svg';

const SideMenuLogo = () => {
  return (
    <div className="w-full">
      <Link href="/">
        <picture>
          <source media="(min-width: 640px)" srcSet={largeLogo.src} />
          <img src={smallLogo.src} alt="logo" className="w-[48px] h-[48px] sm:w-auto sm:h-auto" />
        </picture>
      </Link>
    </div>
  );
};

export default SideMenuLogo;
