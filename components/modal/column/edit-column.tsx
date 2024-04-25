import InputField from '@/components/inputs/input-field';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalTitle from '@/components/modal/modal-title';

const EditColumn = () => {
  return (
    <>
      <ModalTitle>컬럼 관리</ModalTitle>
      <InputField label="이름" type="text" id="name" placeholder="새로운 프로젝트" />
      <div className="sm:flex justify-between items-end">
        <span className="text-[14px] underline text-grayscale-50 mb-[16px] inline-block sm:mb-0">삭제하기</span>
        <ModalButtonGroup positiveName={'변경'} />
      </div>
    </>
  );
};

export default EditColumn;
