import Image from 'next/image';
import manualFirstImage from '@/public/main/main-manual-1.svg';
import manualSecondImage from '@/public/main/main-manual-2.svg';

const HomeSectionManual = () => {
  return (
    <section className="px-[16px] md:w-[90%] xl:max-w-[1200px] mx-auto mt-[184px]">
      <div className="pl-0 w-full md:pl-[60px] pt-[60px] bg-grayscale-90 relative rounded-lg lg:h-[600px]">
        <div className="flex-1 text-center md:text-start">
          <span className="block text-[22px] text-grayscale-50 lg:pt-[123px]">Point 1</span>
          <h3 className="text-[36px] pt-[70px] font-bold md:pt-[100px] md:text-[48px]">
            일의 우선순위를
            <br /> 관리하세요
          </h3>
        </div>
        <div className="flex justify-end mt-[20%] lg:flex-1 ">
          <Image
            src={manualFirstImage.src}
            alt=""
            width={594}
            height={497}
            className="relative pl-[50px] justify-end lg:pl-0 lg:bottom-0 lg:right-0 lg:absolute lg:w-[50%]"
          />
        </div>
      </div>

      <div className="pl-0 md:pl-[60px] pt-[60px] flex-col-reverse w-full lg:flex-row lg:h-[600px] bg-grayscale-90 relative flex mt-[90px] rounded-lg">
        <div className="justify-center flex mt-[20%] lg:realtive lg:flex-1 ">
          <Image
            src={manualSecondImage.src}
            alt=""
            width={436}
            height={502}
            className="relative px-[50px] lg:px-0 lg:absolute lg:left-[5%] lg:bottom-0 lg:w-[40%]"
          />
        </div>
        <div className="flex-1 text-center md:text-start">
          <span className="pt-0 lg:pt-[123px] block text-[22px] text-grayscale-50">Point 2</span>
          <h3 className="text-[36px] font-bold pt-[100px] md:text-[48px]">
            해야 할 일을
            <br /> 등록하세요
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionManual;
