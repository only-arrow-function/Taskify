import Image from "next/image"
import { useRouter } from "next/router"

import BasicButton from "../buttons/basic-button"
import InviteModal from "../dashboard/modal/Invite-modal"

import { useGetInviteUsers } from "@/hooks/swr/use-Invite-users"
import { useHandleModal } from "@/hooks/use-handle-modal"

import NoEmailIcon from "@/public/icon/no-email.svg"

const InviteTable = () => {
  const router = useRouter();
  const { isOpenModal, handleOpenModal, handleCloseModal } = useHandleModal();

  const { data, error, isLoading, mutate } = useGetInviteUsers(router.query.id);
  console.log(data);

  return (
    <div className="flex w-full h-[406px] px-[28px] py-[32px] flex-col gap-[3.7rem] rounded-md bg-white">
      <div className="flex items-center justify-between">
        <span className="text-center text-lg font-bold">초대 내역</span>
        <BasicButton purpose='positive' eventHandler={handleOpenModal}>초대하기</BasicButton>
      </div>
      <ul className="flex flex-col items-center justify-center">
        {data ? (
          <></>
          ) : (
          <>
            <Image src={NoEmailIcon} alt="빈 이메일" />
            <span className="text-grayscale-40">아직 초대한 멤버가 없어요</span>
          </>
        )
        }
      </ul>
      {isOpenModal && <InviteModal handleCloseModal={handleCloseModal}/>}
    </div>
  )
}

export default InviteTable
