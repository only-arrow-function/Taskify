import type { Color } from '@/components/chips/color.type';
import { tagColorConfig } from '@/components/chips/color-constants';

export const chooseRandomColor = () => {
  const colors = Object.keys(tagColorConfig) as Color[];
  const randomNumber = Math.floor(Math.random() * 5);

  return colors[randomNumber];
};
