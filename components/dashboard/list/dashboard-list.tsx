import DashboardOpenButton from '@/components/buttons/domain/dashboard-open-button';
import NewDashboardAddButton from '@/components/buttons/domain/new-dashboard-add-button';
import ColorChipGroup from '@/components/chips/color-chip-group';
import DashboardPagination from '@/components/dashboard/pagination/dashboard-pagination';
import InputField from '@/components/inputs/input-field';
import Modal from '@/components/modal/modal';
import ModalButtonGroup from '@/components/modal/modal-button-group';
// import ModalInput from '@/components/modal/modal-input/modal-input';
import ModalTitle from '@/components/modal/modal-title';
import { useDashboards } from '@/hooks/swr/dashboard/use-dashboards';
import { useBoundStore } from '@/store';

const DashboardList = () => {
  const { data } = useDashboards();
  const { isToggle, handleOpenToggle } = useBoundStore((state) => state);

  console.log(isToggle);

  return (
    <>
      <Modal>
        <ModalTitle>새로운 대시보드</ModalTitle>
        <InputField
          type="text"
          label="대시보드 이름"
          id="new-dashboard"
          placeholder="새로운 프로젝트 이름을 입력하세요."
        />
        <ColorChipGroup />
        <ModalButtonGroup positiveName="생성" />
      </Modal>

      <section className="w-[80vw] my-6 ml-6 sm:w-[67vw] md:my-10 sm:ml-10 md:w-[70vw] xl:max-w-[1022px] lg:ml-10">
        <ul className="grid gap-[13px] md:grid-cols-2 lg:grid-cols-3">
          <li>
            <NewDashboardAddButton onOpenModal={handleOpenToggle} />
          </li>
          {data?.dashboards?.map((dashboard) => (
            <li key={dashboard.id} className="relative">
              <DashboardOpenButton color={dashboard.color}>
                {dashboard.title}
              </DashboardOpenButton>
            </li>
          ))}
        </ul>
        <DashboardPagination />
      </section>
    </>
  );
};

export default DashboardList;
