import BasicButton from '@/components/buttons/basic-button';
import ColorChipGroup from '@/components/chips/color-chip-group';
import InputField from '@/components/inputs/input-field';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalTitle from '@/components/modal/modal-title';

const RenameDashboard = () => {
  const handleInputChange = () => {
    console.log("hi")
  }

  return (
    <section className='bg-white rounded-lg px-[15px] py-[15px]'>
      <div className='flex flex-row justify-between'>
        <ModalTitle>비브리지</ModalTitle>
        <ColorChipGroup />
      </div>
      <InputField
        type="text"
        label="대시보드 이름"
        id="new-dashboard"
        placeholder="변경할 프로젝트 이름을 입력하세요."
        onChange={handleInputChange}
      />
      <div className='flex justify-end'>
        <BasicButton purpose='positive'>변경</BasicButton>
      </div>
    </section>
  )
}

export default RenameDashboard