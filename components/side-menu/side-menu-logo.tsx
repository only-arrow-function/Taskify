import smallLogo from '@/public/logo/logo-small.svg';
import largeLogo from '@/public/logo/logo-with-title-large.svg';

const SideMenuLogo = () => {
  return (
    <div className="w-full mb-[38px] sm:mb-[59px]">
      <picture>
        <source media="(min-width: 680px)" srcSet={largeLogo.src} />
        <img src={smallLogo.src} alt="logo" />
      </picture>
    </div>
  );
};

export default SideMenuLogo;
