import { Color, Colors } from '@/components/chips/color-type';

export const tagColorConfig: Record<Color, Colors> = Object.freeze({
  green: {
    color: 'text-green-50',
    bgColor: 'bg-green-10',
  },
  purple: {
    color: 'text-purple-50',
    bgColor: 'bg-purple-10',
  },
  orange: {
    color: 'text-orange-50',
    bgColor: 'bg-orange-10',
  },
  blue: {
    color: 'text-blue-50',
    bgColor: 'bg-blue-10',
  },
  pink: {
    color: 'text-pink-50',
    bgColor: 'bg-pink-10',
  },
});

export const backgroundColorConfig: Record<Color, string> = Object.freeze({
  green: 'bg-green-50',
  purple: 'bg-purple-50',
  orange: 'bg-orange-50',
  blue: 'bg-blue-50',
  pink: 'bg-pink-50',
});
