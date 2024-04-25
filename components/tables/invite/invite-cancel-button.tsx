import { PropsWithChildren } from 'react';
import { useQueryClient } from "@tanstack/react-query";

import { useInvitationsDeleteMutation } from '@/hooks/react-query/use-query-invite-users';

interface TableButtonProps {
  purpose: 'positive' | 'negative';
  invitationId: string;
  dashboardId: string;
}

const InviteCancelButton = ({ purpose, children, invitationId, dashboardId }: PropsWithChildren<TableButtonProps>) => {
  // sever state
  const queryClient = useQueryClient();
  const { mutateAsync } = useInvitationsDeleteMutation(dashboardId, invitationId, queryClient);

  const handleCancelInvite = async () => {
    try {
      await mutateAsync();
      queryClient.invalidateQueries({ queryKey: [`${dashboardId}-invitations`] });
    } catch (error) {
      console.error("에러 발생:", error);
    }
  }

  const colorStyle =
    purpose === 'positive' ? 'bg-violet-50 border border-violet-50' : 'bg-white border border-grayscale-40';
  const fontStyle = `text-xs font-medium ${purpose === 'positive' ? 'text-white' : 'text-violet-50'} sm:text-sm`;

  return (
    <button
      onClick={handleCancelInvite}
      className={`w-[52px] h-7 rounded-[4px] text- sm:w-[84px] sm:h-8 ${colorStyle} ${fontStyle}`}
    >
      {children}
    </button>
  );
};

export default InviteCancelButton;
