import { ChangeEvent, useState } from 'react';
import type { Color } from './color.type';
import ColorChip from './color-chip';
import { DashboardColors } from '../dashboard/dashboard.constants';
import { useDashboardsStore } from '@/store/dashboard';

const colors: Color[] = ['green', 'purple', 'orange', 'blue', 'pink'];
const hexColors = {
  green: '#7AC555',
  purple: '#760DDE',
  orange: '#FFA500',
  blue: '#76A5EA',
  pink: '#E876EA',
};

const ColorChipGroup = () => {
  const handleColorChange = useDashboardsStore((state) => state.handleColorChange);
  const [checkedColor, setCheckedColor] = useState(colors[0]);

  const onChange = (event: ChangeEvent<HTMLInputElement>, color: string) => {
    setCheckedColor(event.target.value as Color);
    handleColorChange(color as DashboardColors);
  };

  return (
    <div className="flex gap-[10px]">
      {colors.map((color) => (
        <>
          <input
            className="hidden"
            type="radio"
            id={color}
            name="color"
            value={color}
            checked={checkedColor === color}
            onChange={(e) => onChange(e, hexColors[color])}
          />
          <label htmlFor={color} className="cursor-pointer">
            <ColorChip color={color} checked={checkedColor === color} />
          </label>
        </>
      ))}
    </div>
  );
};

export default ColorChipGroup;
