import ModalButton from './modal-button';
import requests from '@/apis/request';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';
import { useDashboardsStore } from '@/store/dashboard';
import { useToggleStore } from '@/store/toggle-store';

type PositiveName = '생성' | '확인' | '수정' | '변경' | '삭제' | '초대';

const ModalButtonGroup = ({
  positiveName,
  disabled,
  onClick,
}: {
  positiveName: PositiveName;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const { data, error, mutate } = useDashboards({ page: 1 });
  const { color } = useDashboardsStore((state) => ({ color: state.color }));
  const handleCloseToggle = useToggleStore((state) => state.handleCloseToggle);

  if (error) {
    return <p>Error 발생</p>;
  }

  const createDashboard = async () => {
    await requests.createDashboard({ title, color });
    mutate({ ...data! });
    handleCloseToggle();
  };

  return (
    <div className="flex justify-center gap-3 sm:justify-end">
      <ModalButton purpose="negative" disabled={false} onClick={handleCloseToggle}>
        취소
      </ModalButton>
      <ModalButton purpose="positive" disabled={!!disabled} onClick={createDashboard}>
        {positiveName}
      </ModalButton>
    </div>
  );
};

export default ModalButtonGroup;
