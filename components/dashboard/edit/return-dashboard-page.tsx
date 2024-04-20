import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import LeftArrowIcon from "@/public/icon/arrow-forward-left.svg"

const ReturnDashboardPage = () => {
  const router = useRouter();

  return (
    <Link href={`/dashboard/${router.query.id}`} className="flex gap-1 items-center mb-[10px]">
      <Image src={LeftArrowIcon} alt="뒤로 가기" />
      <span className="text-center text-base font-medium">뒤로 가기</span>
    </Link>
  )
}

export default ReturnDashboardPage