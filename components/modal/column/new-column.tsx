import InputField from '@/components/inputs/input-field';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalTitle from '@/components/modal/modal-title';

const NewColumn = () => {
  return (
    <>
      <ModalTitle>새 컬럼 생성</ModalTitle>
      <InputField label="이름" type="text" id="name" placeholder="새로운 프로젝트" />
      <ModalButtonGroup positiveName={'생성'} />
    </>
  );
};

export default NewColumn;
