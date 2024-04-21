import { ChangeEvent } from 'react';
import BackDrop from './backdrop';
import GridLayout from './dropdown/grid-layout';
import StateDropdown from './dropdown/state-dropdown';
import ModalNewTodoLayout from './modal-newTodo-layout';
import InputWithImg from './todo/input-with-img';
import InputField from '@/components/inputs/input-field';
import ManagerDropdown from '@/components/modal/dropdown/manager-dropdown';
import ModalButtonGroup from '@/components/modal/modal-button-group';
import ModalTitle from '@/components/modal/modal-title';
import InputWithTag from '@/components/modal/todo/input-with-tag';
import useCard from '@/hooks/swr/use-card';
import { isFormFilled } from '@/lib/domain/is-form-filled';

const tempCardId = 5000;

const ModalEditTodo = () => {
  const { data, updateCard, mutate } = useCard(tempCardId);

  if (!data) return;
  const { title, description, dueDate, tags, imageUrl } = data;

  const handleValueChange = (name: string) => (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    mutate({ ...data, [name]: target.value }, { revalidate: false });
  };

  const handleTagAdd = (newTag: string) => {
    mutate({ ...data, tags: [...tags, newTag] }, { revalidate: false });
  };

  const handleTagRemove = () => {
    mutate({ ...data, tags: tags.slice(0, -1) }, { revalidate: false });
  };

  const handleImageURLChange = (url: string) => {
    mutate({ ...data, imageUrl: url }, { revalidate: false });
  };

  return (
    <>
      <BackDrop />
      <ModalNewTodoLayout>
        <ModalTitle>할 일 생성</ModalTitle>
        <GridLayout>
          <StateDropdown />
          <ManagerDropdown placeholder="이름을 입력해 주세요" />
        </GridLayout>
        <InputField
          label="제목"
          type="text"
          id="title"
          value={title}
          onChange={handleValueChange('title')}
          placeholder="제목을 입력해주세요"
        />
        <InputField
          label="설명"
          type=""
          id="context"
          value={description}
          onChange={handleValueChange('description')}
          placeholder="설명을 입력해주세요"
        />
        <InputField
          label="마감일"
          type="datetime-local"
          value={dueDate}
          onChange={handleValueChange('dueDate')}
          id="calendar"
          placeholder="날짜를 입력해주세요"
        />
        <InputWithTag
          label="태그"
          id="tag"
          type="text"
          placeholder="입력 후 Enter"
          tags={tags}
          onAddTag={handleTagAdd}
          onRemoveTag={handleTagRemove}
        />
        <InputWithImg label="이미지" id="image" value={imageUrl} onChangeImageURL={handleImageURLChange} />
        <ModalButtonGroup positiveName="생성" disabled={!isFormFilled(data)} onClick={() => updateCard(data)} />
      </ModalNewTodoLayout>
    </>
  );
};

export default ModalEditTodo;
