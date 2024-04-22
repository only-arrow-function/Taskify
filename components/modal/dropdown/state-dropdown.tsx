import Image from "next/image";

import ProgressChip from "@/components/chips/progress-chip";
import { useHandleDropdown, useHandleDropdownOutside } from "@/hooks/use-handle-dropdown";
import ArrowDownIcon from "@/public/icon/arrow-drop-down.svg"

const CURRENT_STATE =  Object.freeze([
  { name : "To Do" },
  { name : "On_Progress" },
  { name : "Done" },
]); // 현재 상태에 대한 종류를 더욱 세분화하여 추가할 수 있습니다.

const StateDropdown = () => {
  const { isOpenDropdown, handleOpenDropdown, handleCloseDropdown } = useHandleDropdown();
  const initRef = useHandleDropdownOutside(handleOpenDropdown, handleCloseDropdown);

  return (
    <div ref={initRef}>
      <div className="flex flex-col">
        <label className="text-grayscale-80 text-base font-medium">
          상태
        </label>
        <div className="flex sm:w-[217px] w-[287px] h-[3.125rem] px-4 rounded-lg border focus-within:border-violet-50">
          <input className="w-full outline-none"/>
          <Image src={ArrowDownIcon} alt="아래 화살표"/>
        </div>
      </div>
      {isOpenDropdown && 
        <div className="flex w-[287px] px-4 rounded-lg border absolute mt-1 bg-white sm:w-[217px] sm:top-[167px]">
          <ul className="flex flex-col gap-[13px]">
            {CURRENT_STATE.map(state => (
              <ProgressChip>{state.name}</ProgressChip>
            ))}
          </ul>
        </div>
      }
      <div className="flex w-full h-[1.5rem]"/>
    </div>
  )
}

export default StateDropdown