import Image from 'next/image';
import Link from 'next/link';
import type { DarkmodeProps } from './rending-header-type';
import darkmodeSmallLogoImage from '@/public/logo/logo-small-darkmode.svg';
import smallLogoImage from '@/public/logo/logo-small.svg';
import darkmodeLargeLogoImage from '@/public/logo/logo-with-title-large-darkmode.svg';
import largeLogoImage from '@/public/logo/logo-with-title-large.svg';

const RendingHeaderLogo = (props: DarkmodeProps) => {
  return (
    <h1 className="relative w-[121px] h-[39px] max-sm:w-[24px] max-sm:h-[27px]">
      <Link href="/" className="block">
        <picture>
          <source
            media={`(max-width: 640px)`}
            srcSet={!props.isDarkmode && smallLogoImage.src}
          />
          <source
            media={`(max-width: 640px)`}
            srcSet={props.isDarkmode && darkmodeSmallLogoImage.src}
          />
          <source
            media={`(max-width: 1280px)`}
            srcSet={!props.isDarkmode && largeLogoImage.src}
          />
          <source
            media={`(max-width: 1280px)`}
            srcSet={props.isDarkmode && darkmodeLargeLogoImage.src}
          />
          <Image src={largeLogoImage} alt="Taskify 아이콘" fill />
        </picture>
      </Link>
    </h1>
  );
};

export default RendingHeaderLogo;
