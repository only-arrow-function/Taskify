import { Color } from '@/types/color';

export interface DashBoardProps {
  id: number;
  title: string;
  color: Color;
  createdAt?: string;
  updatedAt?: string;
  createdByMe: boolean;
  userId: number;
}
