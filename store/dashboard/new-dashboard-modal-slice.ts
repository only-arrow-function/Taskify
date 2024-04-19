import { ChangeEvent, ChangeEventHandler } from 'react';
import { StateCreator } from 'zustand';
import { DashboardColors } from '@/components/dashboard/dashboard.constants';

export interface NewDashboardModalState {
  title: string;
  color: DashboardColors;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (color: DashboardColors) => void;
}

export const newDashbaordModalSlice: StateCreator<NewDashboardModalState> = (set) => ({
  title: '',
  color: '#7AC555',
  handleInputChange: (event) => set(() => ({ title: event.target.value })),
  handleColorChange: (color: DashboardColors) => set(() => ({ color })),
});
