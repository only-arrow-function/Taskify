import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';
import TagChip from '@/components/chips/tag-chip';
// import InputField from '@/components/inputs/input-field';

const InputWithTag = ({ label, id, type, placeholder }: { label: string; type: string; placeholder: string }) => {
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);

  const handleChangeTag: ChangeEventHandler = (e) => {
    const target = e.target as HTMLInputElement;

    setTag(target.value);
  };

  const handleKeyDown: KeyboardEventHandler = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') return;

    const target = e.target as HTMLInputElement;

    setTagList((prevTagList) => [...prevTagList, target.value]);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor={id} className="text-grayscale-80 mb-[0.5rem]">
        {label}
      </label>
      <div className="flex w-full h-[3.125rem] px-4 rounded-lg border">
        {tagList?.map((tag) => (
          <TagChip color="green" key={tag}>
            {tag}
          </TagChip>
        ))}
        {/* <input type={type} value={tag} placeholder={placeholder} onChange={handleChangeTag} onKeyDown={handleKeyDown} /> */}
        <input type={type} value={tag} placeholder={placeholder} onChange={handleChangeTag} onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
};

export default InputWithTag;
