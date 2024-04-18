// import MembersTable from '@/components/tables/members-table';
// import ColorChipGroup from '@/components/chips/color-chip-group';

import InputField from '@/components/inputs/input-field';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalNewTodo from '@/components/modal/modal-new-todo';
import ModalTitle from '@/components/modal/modal-title';
import InputWithImg from '@/components/modal/todo/input-with-img';
import InputWithTag from '@/components/modal/todo/input-with-tag';

const TemporaryAyoung = () => {
  return (
    <div className="h-screen bg-slate-300">
      {/* <MembersTable /> */}
      {/* <ColorChipGroup /> */}
      <ModalNewTodo>
        <ModalTitle>할 일 생성</ModalTitle>
        <InputField label="제목" type="text" id="title" placeholder="제목을 입력해주세요" />
        <InputField label="설명" type="" id="context" placeholder="설명을 입력해주세요" />
        <InputField label="마감일" type="datetime-local" id="calendar" placeholder="날짜를 입력해주세요" />
        <InputWithTag label="태그" id="tag" type="text" placeholder="입력 후 Enter" />
        <InputWithImg label='이미지' id='image' type='file'/>
        <ModalButtonGroup positiveName="생성" />
      </ModalNewTodo>
    </div>
  );
};

export default TemporaryAyoung;
