import InputField from '@/components/inputs/input-field';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalTitle from '@/components/modal/modal-title';

const SendInvite = () => {
  return (
    <>
      <ModalTitle>초대하기</ModalTitle>
      <InputField label="이메일" type="email" id="email" placeholder="codeit@codeit.com" />
      <ModalButtonGroup positiveName={'초대'} />
    </>
  );
};

export default SendInvite;
