import Image from "next/image"
import { useRouter } from "next/router"

import BasicButton from "../buttons/basic-button"
import { useGetInviteUsers } from "@/hooks/swr/useInviteUsers"

import NoEmailIcon from "@/public/icon/no-email.svg"

const InviteTable = () => {
  const { route } = useRouter();
  //const { id } = query;
  console.log(route);

  const { data }:any = useGetInviteUsers("0"); 
  console.log(data);

  return (
    <div className="flex w-full h-[406px] px-[28px] py-[32px] flex-col gap-[3.7rem] rounded-md bg-white">
      <div className="flex items-center justify-between">
        <span className="text-center font-[Pretendard] text-lg font-bold">초대 내역</span>
        <BasicButton purpose='positive'>초대하기</BasicButton>
      </div>
      <ul className="flex flex-col items-center justify-center">
        <Image src={NoEmailIcon} alt="빈 이메일" />
        <span className="text-grayscale-40">아직 초대한 멤버가 없어요</span>
      </ul>
    </div>
  )
}

export default InviteTable
