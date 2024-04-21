import React from 'react';
import Image from 'next/image';

import featureFirstImage from '@/public/main/main-section-feature-1.svg';
import featureSecondImage from '@/public/main/main-section-feature-2.svg';
import featureThirdImage from '@/public/main/main-section-feature-3.svg';

const HomeSectionFeature = () => {
  return (
    <section className="w-full px-[16px] mx-auto mt-[90px] md:px-[40px] xl:max-w-[1200px]">
      <h4 className="text-center text-[28px] font-bold lg:text-start">생산성을 높이는 다양한 설정 ⚡</h4>
      <ul className="mt-[36px] lg:flex justify-between">
        <li className="w-full lg:w-[32%] xl:w-[378px]">
          <div className="h-[69.333vw] bg-grayscale-70 flex items-center justify-center rounded-t-lg lg:h-[260px]">
            <Image
              src={featureFirstImage.src}
              alt=""
              width={300}
              height={123}
              className="relative w-[70%] lg:w-[70%] lg:w-max-[300px]"
            />
          </div>
          <div className="p-[32px] bg-grayscale-90 text-[18px] rounded-b-lg">
            <h5>대시보드 설정</h5>
            <p className="mt-[18px]">대시보드 사진과 이름을 변경할 수 있어요.</p>
          </div>
        </li>
        <li className="w-full mt-[40px] lg:mt-0 lg:w-[32%] xl:w-[378px]">
          <div className="h-[69.333vw] bg-grayscale-70 flex items-center justify-center rounded-t-lg lg:h-[260px]">
            <Image
              src={featureSecondImage.src}
              alt=""
              width={300}
              height={230}
              className="relative w-[70%] lg:w-[70%] lg:w-max-[300px]"
            />
          </div>
          <div className="p-[32px] bg-grayscale-90 text-[18px] rounded-b-lg">
            <h5>초대</h5>
            <p className="mt-[18px]">새로운 팀원을 초대할 수 있어요.</p>
          </div>
        </li>
        <li className="w-full mt-[40px] lg:mt-0 lg:w-[32%] xl:w-[378px]">
          <div className="h-[69.333vw] bg-grayscale-70 flex items-center justify-center rounded-t-lg lg:h-[260px]">
            <Image
              src={featureThirdImage.src}
              alt=""
              width={300}
              height={195}
              className="relative w-[70%] lg:w-[70%] lg:w-max-[300px]"
            />
          </div>
          <div className="p-[32px] bg-grayscale-90 text-[18px] rounded-b-lg">
            <h5>구성원</h5>
            <p className="mt-[18px]">구성원을 초대하고 내보낼 수 있어요.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default HomeSectionFeature;
