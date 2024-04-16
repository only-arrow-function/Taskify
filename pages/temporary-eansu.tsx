//import BasicButton from "@/components/buttons/basic-button"
import DashboardOpenButton from "@/components/buttons/domain/dashboard-open-button";
import ColorChip from "@/components/chips/color-chip";
//import { backgroundColorConfig } from "@/constants/chips";
import NumberChip from "@/components/chips/number-chip";
import ProgressChip from "@/components/chips/progress-chip";
import TagChip from "@/components/chips/tag-chip";

const TemporaryEansu = () => {
  return (
    <>
      {/* <BasicButton purpose='negative'>삭제</BasicButton> */}
      <DashboardOpenButton >대시보드 추가</DashboardOpenButton>
      <ColorChip color='orange' checked={false}/>
      <NumberChip>10</NumberChip>
      <ProgressChip>백엔드</ProgressChip>
      <TagChip color='green'>태그</TagChip>
    </>
  );
};

export default TemporaryEansu;
