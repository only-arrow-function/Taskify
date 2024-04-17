import BasicButton from '@/components/buttons/basic-button';

const DashboardInviteTable = () => {
  return (
    <div>
      <div className="flex text-grayscale-50">
        <span className="w-[36.025%]">이름</span>
        <span className="w-[31.263%]">초대자</span>
        <span className="w-[32.712%]">수락 여부</span>
      </div>

      <ul>
        <li className="flex items-center py-7 text-grayscale-80 border-b border-grayscale-30">
          <span className="w-[36.025%]">프로덕트 디자인</span>
          <span className="w-[31.263%]">손동희</span>
          <span className="w-[32.712%] flex gap-2.5">
            <BasicButton purpose="positive">수락</BasicButton>
            <BasicButton purpose="negative">거절</BasicButton>
          </span>
        </li>
        <li className="flex items-center py-7 text-grayscale-80 border-b border-grayscale-30">
          <span className="w-[36.025%]">프로덕트 디자인</span>
          <span className="w-[31.263%]">손동희</span>
          <span className="w-[32.712%] flex gap-2.5">
            <BasicButton purpose="positive">수락</BasicButton>
            <BasicButton purpose="negative">거절</BasicButton>
          </span>
        </li>
        <li className="flex items-center py-7 text-grayscale-80 border-b border-grayscale-30">
          <span className="w-[36.025%]">프로덕트 디자인</span>
          <span className="w-[31.263%]">손동희</span>
          <span className="w-[32.712%] flex gap-2.5">
            <BasicButton purpose="positive">수락</BasicButton>
            <BasicButton purpose="negative">거절</BasicButton>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DashboardInviteTable;
