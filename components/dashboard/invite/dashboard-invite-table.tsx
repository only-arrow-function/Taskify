import BasicButton from '@/components/buttons/basic-button';

const DashboardInviteTable = () => {
  return (
    <div>
      <div className="hidden md:flex text-grayscale-50">
        <span className="md:w-[36%]">이름</span>
        <span className="md:w-[30%]">초대자</span>
        <span className="md:w-[34%]">수락 여부</span>
      </div>

      <ul className="text-sm sm:text-base">
        <li className="md:flex items-center py-7 text-grayscale-80 border-b border-grayscale-30">
          <div className="flex md:w-[36%]">
            <span className="md:hidden text-grayscale-50">이름</span>
            <span className="ml-7 md:ml-0">프로덕트 디자인</span>
          </div>
          <div className="flex sm:w-[30%] md:w-[30%] mt-2.5 md:mt-0">
            <span className="md:hidden text-grayscale-50">초대자</span>
            <span className="ml-4 md:ml-0">손동희</span>
          </div>
          <div className="flex md:w-[34%] mt-4 md:mt-0">
            <span className="flex gap-2.5">
              <BasicButton purpose="positive">수락</BasicButton>
              <BasicButton purpose="negative">거절</BasicButton>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DashboardInviteTable;
