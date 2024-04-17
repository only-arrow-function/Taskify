import { useState } from 'react';
import type { Color } from './color.type';
import ColorChip from './color-chip';

const colors: Color[] = ['green', 'purple', 'orange', 'blue', 'pink'];
const hexColors = {
  green: '#7AC555',
  purple: '#760DDE',
  orange: '#FFA500',
  blue: '#76A5EA',
  pink: '#E876EA',
};

const ColorChipGroup = () => {
  const [checkedColor, setCheckedColor] = useState(colors[0]);

  return (
    <div className="flex gap-[10px]">
      {colors.map((color) => (
        <>
          <input
            className="hidden"
            type="radio"
            id={color}
            name="color"
            value={hexColors[color]}
            checked={checkedColor === color}
            onChange={(e) => setCheckedColor(e.target.value as Color)}
          />
          <label htmlFor={color}>
            <ColorChip color={color} checked={checkedColor === color} />
          </label>
        </>
      ))}
    </div>
  );
};

export default ColorChipGroup;
