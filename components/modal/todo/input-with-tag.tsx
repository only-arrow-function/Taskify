import { KeyboardEventHandler } from 'react';
import TagChip from '@/components/chips/tag-chip';

const InputWithTag = ({
  label,
  id,
  type,
  placeholder,
  name,
  tags,
  onAddTag,
  onRemoveTag,
  onBlur,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
  tags: string[];
  onAddTag: (newTag: string) => void;
  onRemoveTag: () => void;
  onBlur: () => void;
}) => {
  // const [tagList, setTagList] = useState<string[]>([]);

  const handleKeyUp: KeyboardEventHandler = (e) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;

    if (e.key !== 'Enter' && e.key !== 'Backspace') return;

    if (e.key === 'Enter') {
      if (target.value.trim() === '') {
        return;
      }

      if (tags.includes(target.value)) {
        return;
      }

      const addTag = target.value;
      onAddTag(addTag);
      target.value = '';

      return;
    }

    if (e.key === 'Backspace') {
      if (target.value === '' && tags.length !== 0) {
        onRemoveTag();
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
        {tags?.map((tag) => (
          <TagChip color="green" key={tag}>
            {tag}
          </TagChip>
        ))}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          onKeyUp={handleKeyUp}
          className="flex-grow focus:outline-none"
          onBlur={onBlur}
        />
      </div>
      <div className="flex w-full h-[1.5rem]" />
    </div>
  );
};

export default InputWithTag;
