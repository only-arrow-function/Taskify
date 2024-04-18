import { useState } from "react"
import Image from "next/image";

import ArrowDownIcon from "@/public/icon/arrow-drop-down.svg"

const ManagerDropdown = ({ placeholder }: { placeholder: string }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpenDropdown(true);
  }

  const handleCloseDropdown = () => {
    setIsOpenDropdown(false);
  }

  return (
    <div className="flex flex-col gap-[10px]">
      <label className="text-grayscale-80 text-base font-medium">
        담당자
      </label>
      <div className="flex w-full h-[3.125rem] px-4 rounded-lg border focus-within:border-violet-50" onClick={handleOpenDropdown}>
        <input placeholder={placeholder} className="w-full outline-none"/>
        <Image src={ArrowDownIcon} alt="아래 화살표" className="relative"/>
      </div>
      {isOpenDropdown && 
        <div className="flex w-full h-[3.125rem] px-4 rounded-lg border absolute top-[90px]"></div>
      }
    </div> // 내부 로직은 초대가 완료된 이후에 넣겠습니다.
  )
}

export default ManagerDropdown