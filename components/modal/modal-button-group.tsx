import ModalButton from './modal-button';
import { useBoundStore } from '../../store/index';
import requests from '@/apis/request';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';

type PositiveName = '생성' | '확인' | '수정' | '변경' | '삭제';

const ModalButtonGroup = ({ positiveName, disabled }: { positiveName: PositiveName; disabled?: boolean }) => {
  const { data, error, mutate } = useDashboards();
  const { color, title, handleCloseToggle } = useBoundStore((state) => state);

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
