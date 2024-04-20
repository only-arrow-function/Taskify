import Image from "next/image"
import Link from "next/link"

import LeftArrowIcon from "@/public/icon/arrow-forward-left.svg"

const ReturnDashboardPage = () => {
  return (
    <Link href="/dashboard" className="flex gap-1 items-center mb-[10px]">
      <Image src={LeftArrowIcon} alt="뒤로 가기" />
      <span className="text-center text-base font-medium">뒤로 가기</span>
    </Link>
  )
}

export default ReturnDashboardPage