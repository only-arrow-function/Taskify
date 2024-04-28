import { ChangeEventHandler, useState } from 'react';
import ModalButton from '../modal-button';

const INPUT_INFO = {
  comment: {
    label: '댓글',
    placeholder: '댓글 작성하기',
    labelStyle: 'text-sm sm:text-base',
    sizeStyle: 'p-3 h-[84px] md:pt-4 md:pl-4 md:h-[110px]',
    contentFontStyle: `text-xs placeholder:text-grayscale-50 sm:text-sm`,
  },
  description: {
    label: '설명',
    placeholder: '설명을 입력해 주세요',
    labelStyle: 'text-base sm:text-lg',
    sizeStyle: 'px-4 pt-[13px] pb-3 h-[84px] sm:pt-[15px] sm:pb-[14px] sm:h-[96px]',
  },
};

const TextareaWithLabel = ({
  purpose,
  onAddComment,
}: {
  purpose: 'comment' | 'description';
  onAddComment?: (comment: string) => void;
}) => {
  const [content, setContent] = useState('');

  const handleChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => setContent(e.target.value);

  const handleAddButtonClick = () => {
    setContent('');
    if (!onAddComment) return;
    onAddComment(content);
  };

  return (
    <div className={`flex flex-col w-full ${purpose === 'comment' ? 'gap-2' : 'gap-[10px]'} sm:gap-[10px]`}>
      <label htmlFor={purpose} className={`text-grayscale-80 text-sm font-medium ${INPUT_INFO[purpose].labelStyle}`}>
        {INPUT_INFO[purpose].label}
      </label>
      <div
        className={`flex flex-col justify-between gap-1 items-end border border-grayscale-40 rounded-md ${INPUT_INFO[purpose].sizeStyle}`}
      >
        <textarea
          id={purpose}
          className="flex-grow w-full min-h-6 resize-none outline-none placeholder:text-grayscale-50"
          placeholder={`${INPUT_INFO[purpose].placeholder}`}
          value={content}
          onChange={handleChangeContent}
        />
        {purpose === 'comment' && (
          <ModalButton purpose="negative" position="inInput" onClick={handleAddButtonClick}>
            입력
          </ModalButton>
        )}
      </div>
    </div>
  );
};

export default TextareaWithLabel;
