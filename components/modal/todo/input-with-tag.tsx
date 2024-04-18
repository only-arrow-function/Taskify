import { KeyboardEventHandler, useState } from 'react';
import TagChip from '@/components/chips/tag-chip';

const InputWithTag = ({
  label,
  id,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) => {
  const [tagList, setTagList] = useState<string[]>([]);

  const handleKeyUp: KeyboardEventHandler = (e) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;

    if (e.key !== 'Enter' && e.key !== 'Backspace') return;

    if (e.key === 'Enter') {
      if (target.value.trim() === '') {
        return;
      }

      if (tagList.includes(target.value)) {
        return;
      }

      const addTagName = target.value;
      setTagList((prevTagList) => [...prevTagList, addTagName]);
      target.value = '';

      return;
    }

    if (e.key === 'Backspace') {
      if (target.value === '' && tagList.length !== 0) {
        setTagList((prevTagList) => prevTagList.slice(0, -1));
        return;
      }
      return;
    }
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor={id} className="text-grayscale-80">
        {label}
      </label>
      <div className="flex flex-wrap items-center gap-[6px] w-full pt-[13px] pb-3 px-4 rounded-lg border sm:pt-[15px] sm:pb-[14px]">
        {tagList?.map((tag) => (
          <TagChip color="green" key={tag}>
            {tag}
          </TagChip>
        ))}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onKeyUp={handleKeyUp}
          className="flex-grow focus:outline-none"
        />
      </div>
    </div>
  );
};

export default InputWithTag;
