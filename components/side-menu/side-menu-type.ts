import { Color } from '@/components/chips/color.type';

export interface DashBoardProps {
  id: number;
  title: string;
  color: Color;
  createdAt?: string;
  updatedAt?: string;
  createdByMe: boolean;
  userId: number;
}
