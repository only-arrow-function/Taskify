import { useState } from 'react';
import ProfileImage from './profile-image';
import useComment from '@/hooks/swr/use-comment';

const formatDate = (date) => {
  return date.slice(0, 16).replaceAll('T', ' ').replaceAll('-', '.');
};

const Comment = ({ id, content, createdAt, author }) => {
  const { updateComment, deleteComment } = useComment(5001);
  const [changeContent, setChangeContent] = useState(content);
  const [isModify, setIsModify] = useState(false);

  const handleModifyComment = () => {
    updateComment(id, changeContent);
    setIsModify(false);
  };

  const handleModifyButtonClick = () => {
    setIsModify(true);
  };

  return (
    <li id={id} className="flex w-full gap-2 md:gap-[10px]">
      <ProfileImage nickname={author.nickname} />
      <div className="flex flex-col items-start w-full">
        <div className="flex gap-[6px]">
          <span className="leading-6 text-xs font-semibold text-grayscale-80">{author.nickname}</span>
          <span className="leading-6 text-[10px] text-grayscale-50">{formatDate(createdAt)}</span>
        </div>
        <div className="flex flex-col gap-2 w-full md:gap-3">
          {isModify ? (
            <textarea
              className="w-full resize-none text-xs text-grayscale-80 bg-inherit border border-grayscale-40 md:text-sm"
              value={changeContent}
              onChange={(e) => setChangeContent(e.target.value)}
            />
          ) : (
            <p className="text-xs text-grayscale-80 md:text-sm">{content}</p>
          )}
          <ul className="flex gap-2 h-3 md:h-[14px]">
            <li className="text-grayscale-50 text-[10px] md:text-xs">
              <button
                className="underline underline-offset-1"
                onClick={isModify ? handleModifyComment : handleModifyButtonClick}
              >
                {isModify ? '완료' : '수정'}
              </button>
            </li>
            <li className="text-grayscale-50 text-[10px] md:text-xs">
              <button className="underline underline-offset-1" onClick={() => deleteComment(id)}>
                삭제
              </button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Comment;
