import { PropsWithChildren } from 'react';

interface TableButtonProps {
  purpose: 'positive' | 'negative';
  onClick: () => void;
}

const TableButton = ({ purpose, children, onClick }: PropsWithChildren<TableButtonProps>) => {
  const colorStyle =
    purpose === 'positive' ? 'bg-violet-50 border border-violet-50' : 'bg-white border border-grayscale-40';
  const fontStyle = `text-xs font-medium ${purpose === 'positive' ? 'text-white' : 'text-violet-50'} sm:text-sm`;

  return (
    <button
      onClick={onClick}
      className={`w-[52px] h-7 rounded-[4px] text- sm:w-[84px] sm:h-8 ${colorStyle} ${fontStyle}`}
    >
      {children}
    </button>
  );
};

export default TableButton;
