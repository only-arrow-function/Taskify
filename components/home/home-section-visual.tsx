import Image from 'next/image';
import Link from 'next/link';
import visualImage from '@/public/main/main-visual.svg';

const HomeSectionVisual = () => {
  return (
    <section className="px-[16px] pt-[94px] flex flex-col items-center sm:px-[40px]">
      <Image
        src={visualImage.src}
        alt=""
        width={722}
        height={423}
        className="w-[90%] sm:w-[80%] h-full lg:max-w-[723px]"
      />
      <h2 className="mt-[24px] text-[40px] font-bold sm:mt-[48px] sm:text-[56px] lg:text-[76px]">
        새로운 일정 관리 <span className="text-violet-50 text-center block sm:inline">Taskify</span>
      </h2>
      <p className="mt-[24px] mb-[66px]">서비스의 메인 설명 들어갑니다.</p>
      <div className="w-[280px] h-[50px] rounded-lg font-medium text-lg bg-violet-50">
        <Link className="w-full h-full flex justify-center items-center" href="/login">
          로그인 하기
        </Link>
      </div>
    </section>
  );
};

export default HomeSectionVisual;
