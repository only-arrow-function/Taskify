import React from 'react';
import Link from 'next/link';
import RendingHeader from '@/components/rending-header/rending-header';

const PageNotFound = () => {
  return (
    <>
      <section className="items-start min-h-screen flex flex-col justify-center bg-violet-950 text-white sm:items-center px-[16px]">
        <h1 className="text-[60px] md:text-[100px] font-bold">404 ERROR 😕</h1>
        <h2 className="text-[36px] font-bold pb-5">요청하신 페이지를 찾을 수 없어요 :(</h2>
        <p className="text-start sm:text-center pb-9 text-lg">
          존재하지 않는 주소를 입력하셨거나, <br />
          요청하신 페이지의 주소 변경 및 삭제되어 찾을 수 없어요
        </p>
        <Link
          href="/"
          className="block text-center font-medium leading-normal sm:text-sm text-xspx-5 px-6 py-4 rounded-lg bg-violet-600"
        >
          메인 페이지로 이동
        </Link>
      </section>
    </>
  );
};

export default PageNotFound;
