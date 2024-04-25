import { KeyboardEventHandler } from 'react';
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
  onRemoveTag: () => void;
}) => {
  const handleKeyDown: KeyboardEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
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

    if (e.key === 'Backspace') {
      if (target.value === '' && tags.length !== 0) {
        e.preventDefault();
        target.value = tags[tags.length - 1].split('$')[0];
        onRemoveTag();
        return;
      }
    }
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor={id} className="text-grayscale-80 font-medium">
        {label}
      </label>
      <div className="flex flex-wrap items-center gap-[6px] w-full pt-[13px] pb-3 px-4 rounded-lg border sm:pt-[15px] sm:pb-[14px]">
        <ul className="flex gap-[6px]">
          {tags?.map((tag) => {
            return <TagChip tag={tag} key={tag} />;
          })}
        </ul>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className="flex-grow w-3/12 focus:outline-none"
        />
      </div>
      <div className="flex w-full h-[1.5rem]" />
    </div>
  );
};

export default InputWithTag;
