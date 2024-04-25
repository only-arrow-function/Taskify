import ModalButtonGroup from '@/components/modal/modal-button-group';

const RemoveColumn = () => {
  return (
    <>
      <div className="flex justify-center items-center py-[50px]">
        <h3 className="text-[16px] sm:text-[18px] text-grayscale-80">컬럼의 모든 카드가 삭제됩니다.</h3>
      </div>
      <ModalButtonGroup positiveName={'삭제'} />
    </>
  );
};

export default RemoveColumn;
