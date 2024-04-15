import Image from 'next/image';
import Link from 'next/link';
import type { RendingHeaderProps } from './rending-header-type';
import darkmodeLargeLogoImage from '@/public/icon/rending-header/rending-header-logo-large-darkmode.svg';
import largeLogoImage from '@/public/icon/rending-header/rending-header-logo-large.svg';
import darkmodeSmallLogoImage from '@/public/icon/rending-header/rending-header-logo-small-darkmode.svg';
import smallLogoImage from '@/public/icon/rending-header/rending-header-logo-small.svg';

const RendingHeaderLogo = (props: RendingHeaderProps) => {
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
