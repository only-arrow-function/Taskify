import Image from "next/image";

import { useHandleDropdown, useHandleDropdownOutside } from "@/hooks/use-handle-dropdown";

import ArrowDownIcon from "@/public/icon/arrow-drop-down.svg"

const ManagerDropdown = ({ placeholder }: { placeholder: string }) => {
  const { isOpenDropdown, handleOpenDropdown, handleCloseDropdown } = useHandleDropdown();
  const initRef = useHandleDropdownOutside(handleOpenDropdown, handleCloseDropdown);
  
  return (
    <div ref={initRef}>
      <div className="flex flex-col">
        <label className="text-grayscale-80 text-base font-medium">
          담당자
        </label>
        <div className="flex sm:w-[217px] w-[287px] h-[3.125rem] px-4 rounded-lg border focus-within:border-violet-50">
          <input placeholder={placeholder} className="w-full outline-none"/>
          <Image src={ArrowDownIcon} alt="아래 화살표" />
        </div>
      </div>
      {isOpenDropdown &&
        <div className="flex sm:w-[217px] w-[287px] h-[3.125rem] rounded-lg border mt-1 absolute bg-white sm:top-[167px] sm:right-[36px]"></div>
      }
      <div className="flex w-full h-[1.5rem]"/>
    </div>
  )
}

export default ManagerDropdown