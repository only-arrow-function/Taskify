import { useQueryClient } from '@tanstack/react-query';
import BasicButton from '@/components/buttons/basic-button';
import { useAcceptInvitedDashboard, useRefuseInvitedDashboard } from '@/hooks/react-query/use-query-invited-dashboard';

const DashboardInviteItem = ({
  id,
  dashboardTitle,
  inviterName,
}: {
  id: number;
  dashboardTitle: string;
  inviterName: string;
}) => {
  const queryClient = useQueryClient();

  const { mutate: refuseMutate } = useRefuseInvitedDashboard(id, queryClient);
  const { mutate: acceptMutate } = useAcceptInvitedDashboard(id, queryClient);

  return (
    <li id={String(id)} className="md:flex items-center py-7 text-grayscale-80 border-b border-grayscale-30">
      <div className="flex gap-4 md:w-[36%]">
        <span className="md:hidden min-w-12 text-grayscale-50">이름</span>
        <span className="md:ml-0">{dashboardTitle}</span>
      </div>
      <div className="flex gap-4 md:w-[30%] mt-2.5 md:mt-0">
        <span className="md:hidden min-w-12 text-grayscale-50">초대자</span>
        <span className="md:ml-0">{inviterName}</span>
      </div>
      <div className="flex md:w-[34%] mt-4 md:mt-0">
        <span className="flex gap-2.5">
          <BasicButton purpose="positive" eventHandler={acceptMutate}>
            수락
          </BasicButton>
          <BasicButton purpose="negative" eventHandler={refuseMutate}>
            거절
          </BasicButton>
        </span>
      </div>
    </li>
  );
};

export default DashboardInviteItem;
