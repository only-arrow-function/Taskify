import Image from "next/image";

import ArrowDownIcon from "@/public/icon/arrow-drop-down.svg"

const ManagerDropdown = ({ placeholder, openDropdown, isOpenDropdown }: { placeholder: string, openDropdown: () => void, isOpenDropdown: boolean}) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="text-grayscale-80 text-base font-medium">
          담당자
        </label>
        <div className="flex sm:w-[217px] w-[287px] h-[3.125rem] px-4 rounded-lg border focus-within:border-violet-50" onClick={openDropdown}>
          <input placeholder={placeholder} className="w-full outline-none"/>
          <Image src={ArrowDownIcon} alt="아래 화살표" />
        </div>
      </div>
      {isOpenDropdown &&
        <div className="flex sm:w-[217px] w-[287px] h-[3.125rem] rounded-lg border mt-1 absolute bg-white sm:top-[167px] sm:right-[36px]"></div>
      }
      <div className="flex w-full h-[1.5rem]"/>
    </>
  )
}

export default ManagerDropdown