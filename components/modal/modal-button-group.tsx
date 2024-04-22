import ModalButton from './modal-button';

type PositiveName = '생성' | '확인' | '수정' | '변경' | '삭제';

const ModalButtonGroup = ({
  positiveName,
  disabled,
  onClick,
}: {
  positiveName: PositiveName;
  disabled: boolean;
  onClick?: () => void;
}) => {
  return (
    <div className="flex justify-center gap-3 sm:justify-end">
      <ModalButton purpose="negative" disabled={false}>
        취소
      </ModalButton>
      <ModalButton purpose="positive" disabled={disabled} onClick={onClick}>
        {positiveName}
      </ModalButton>
    </div>
  );
};

export default ModalButtonGroup;
