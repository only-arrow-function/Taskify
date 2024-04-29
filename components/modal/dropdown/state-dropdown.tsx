import { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import Image from 'next/image';

import { ColumnItem } from '../column/columns-data.type';
import ProgressChip from '@/components/chips/progress-chip';
import { useHandleDropdown } from '@/hooks/use-handle-dropdown';
import ArrowDownIcon from '@/public/icon/arrow-drop-down.svg';

// const CURRENT_STATE = Object.freeze([{ name: 'To Do' }, { name: 'On_Progress' }, { name: 'Done' }]); // 현재 상태에 대한 종류를 더욱 세분화하여 추가할 수 있습니다.
const CURRENT_STATE = ['To Do', 'On_Progress', 'Done'];

interface StateDropdownProps {
  placeholder?: string;
  onSelectedColumn: (updateColumn: ColumnItem) => void;
  columnStates: ColumnItem[];
  selectedState: ColumnItem;
}

const StateDropdown = (
  { placeholder, selectedState, columnStates, onSelectedColumn }: StateDropdownProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const { isOpenDropdown, handleOpenDropdown, handleCloseDropdown, handleToggleDropdown } = useHandleDropdown();

  const columnStateRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      const target = event.target as Element;

      if (target.closest('button[data-type="columnState"]')) {
        handleToggleDropdown();
        return;
      }

      if (columnStateRef.current && !columnStateRef.current.contains(event.target as any)) {
        handleCloseDropdown();
        return;
      }
    };

    document.addEventListener('mousedown', handleOutside);

    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <label className="text-grayscale-80 text-base font-medium">상태</label>
        <div className="flex sm:w-[217px] w-[287px] h-[3.125rem] px-4 rounded-lg border focus-within:border-violet-50">
          <button
            className="w-full outline-none flex items-center gap-x-3"
            type="button"
            data-type="columnState"
            ref={ref}
          >
            {selectedState ? (
              <>
                <ProgressChip>{selectedState.title}</ProgressChip>
              </>
            ) : (
              placeholder
            )}
          </button>
          <Image src={ArrowDownIcon} alt="아래 화살표" />
        </div>
      </div>
      {isOpenDropdown && (
        <div className="flex w-[287px] rounded-lg border absolute mt-1 bg-white sm:w-[217px] sm:top-[167px]">
          <ul ref={columnStateRef} className="w-full">
            {columnStates.map((state) => (
              <li
                className="flex items-center px-4 gap-x-3 py-[13px] cursor-pointer hover:bg-grayscale-30 w-full overflow-hidden"
                onClick={onSelectedColumn.bind(null, state)}
              >
                <ProgressChip>{state.title}</ProgressChip>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex w-full h-[1.5rem]" />
    </div>
  );
};

export default forwardRef(StateDropdown);
