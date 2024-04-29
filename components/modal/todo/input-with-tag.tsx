import { KeyboardEventHandler, useState } from 'react';
import TagChip from '@/components/chips/tag-chip';
import { chooseRandomColor } from '@/util/randomColor';

const InputWithTag = ({
  label,
  id,
  type,
  placeholder,
  tags,
  onAddTag,
  onRemoveTag,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  tags: string[];
  onAddTag: (newTag: string) => void;
  onRemoveTag: (tags: string[]) => void;
}) => {
  let prevTargetValue: string;

  const handleKeyDown: KeyboardEventHandler = (e) => {
    e.preventDefault();

    if (prevTargetValue === '' && e.key === 'Backspace') {
      tags.pop();
      onRemoveTag(tags);
      return;
    }

    const target = e.target as HTMLInputElement;
    prevTargetValue = target.value;
    if (e.key !== 'Enter' && e.key !== 'Backspace') return;

    if (e.key === 'Enter') {
      e.preventDefault();
      if (target.value.trim() === '') {
        return;
      }

      if (tags.includes(target.value)) {
        return;
      }

      const randomColor = chooseRandomColor();
      const addTag = target.value + '$' + randomColor;
      onAddTag(addTag);
      target.value = '';

      return;
    }
  };

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  const focusStyles = isFocus ? `focus-within:border-2 focus-within:border-violet-50` : '';

  return (
    <div className="flex flex-col gap-[10px] mt-[20px]">
      <label htmlFor={id} className="text-grayscale-80 font-medium">
        {label}
      </label>
      <div
        className={`flex flex-wrap items-center gap-[6px] w-full pt-[13px] pb-3 px-4 rounded-lg border sm:pt-[15px] sm:pb-[14px] ${focusStyles}`}
      >
        <ul className="flex gap-[6px]">
          {tags?.map((tag) => {
            return <TagChip tag={tag} key={tag} />;
          })}
        </ul>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onKeyUp={handleKeyDown}
          className="flex-grow w-3/12 focus:outline-none"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="flex w-full h-[1.5rem]" />
    </div>
  );
};

export default InputWithTag;
