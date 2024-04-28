import { DashboardColors } from '../dashboard/dashboard.constants';

export interface DashBoardProps {
  id: number;
  title: string;
  color: DashboardColors;
  createdAt?: string;
  updatedAt?: string;
  createdByMe: boolean;
  userId: number;
  page: number;
}
