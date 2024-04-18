import { useState } from "react"
import Image from "next/image";

import ArrowDownIcon from "@/public/icon/arrow-drop-down.svg"

const ManagerDropdown = ({ placeholder }: { placeholder: string }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpenDropdown((isOpenDropdown) => !isOpenDropdown);
  }

  return (
    <div className="flex flex-col gap-[10px]">
      <label className="text-grayscale-80 mb-[0.5rem] text-base font-medium">
        담당자
      </label>
      <div className="flex w-full h-[3.125rem] px-4 rounded-lg border">
        <input placeholder={placeholder} className="w-full"/>
        <Image src={ArrowDownIcon} alt="아래 화살표" className="relative right-[16px]"/>
      </div>
    </div>
  )
}

export default ManagerDropdown