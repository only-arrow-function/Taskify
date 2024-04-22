import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import emailIcon from '@/public/icon/email.svg';
import facebookIcon from '@/public/icon/facebook.svg';
import instagramIcon from '@/public/icon/instagram.svg';

const RendingFooter = () => {
  return (
    <footer className="bg-black text-[12px] pb-[11.719vw] pt-[15.625vw] px-[40px] text-grayscale-50 md:text-[16px] md:pb-0 md:pt-[160px] lg:px-0">
      <div className="w-full flex flex-col items-center mx-auto py-[40px] md:flex-row md:justify-between lg:w-[85.417vw]">
        <span className="flex-shrink">©codeit - 2023</span>
        <ul className="flex flex-shrink mt-[12px] md:mt-0">
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li className="md:ml-[32px]">
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
        <ul className="flex items-center flex-shrink mt-[68px] md:mt-0">
          <li>
            <Image src={emailIcon.src} alt="" width={20} height={20} />
          </li>
          <li className="mx-[20px] md:ml-[14px]">
            <Image src={facebookIcon.src} alt="" width={22} height={22} />
          </li>
          <li className="md:ml-[14px]">
            <Image src={instagramIcon.src} alt="" width={22} height={22} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default RendingFooter;
