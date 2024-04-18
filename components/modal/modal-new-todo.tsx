import BackDrop from './backdrop';
import ModalNewTodoLayout from './modal-newTodo-layout';
import InputField from '@/components/inputs/input-field';
import ManagerDropdown from '@/components/modal/dropdown/manager-dropdown';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalTitle from '@/components/modal/modal-title';
import InputWithTag from '@/components/modal/todo/input-with-tag';
import { useHandleDropdown } from '@/hooks/use-handle-dropdown';


const ModalNewTodo = () => {
  const { isOpenDropdown, handleOpenDropdown, handleCloseDropdown } = useHandleDropdown();
  
  return (
    <>
      <BackDrop />
      <ModalNewTodoLayout closeDropdown={handleCloseDropdown}>
        <ModalTitle>할 일 생성</ModalTitle>
          <ManagerDropdown placeholder='이름을 입력해 주세요' openDropdown={handleOpenDropdown} isOpenDropdown={isOpenDropdown}/>
          <InputField label="제목" type="text" id="title" placeholder="제목을 입력해주세요" />
          <InputField label="설명" type="" id="context" placeholder="설명을 입력해주세요" />
          <InputField label="마감일" type="datetime-local" id="calendar" placeholder="날짜를 입력해주세요" />
          <InputWithTag label="태그" id="tag" type="text" placeholder="입력 후 Enter" />
        <ModalButtonGroup positiveName="생성" />
      </ModalNewTodoLayout>
    </>
  );
};

export default ModalNewTodo;
