import { ChangeEvent, ChangeEventHandler } from 'react';
import { StateCreator } from 'zustand';
import { DashboardColors } from '@/components/dashboard/dashboard.constants';

export interface NewDashboardModalState {
  title: string;
  color: DashboardColors;
  resetTitle: () => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (color: DashboardColors) => void;
}

export const newDashboardModalSlice: StateCreator<NewDashboardModalState> = (set) => ({
  title: '',
  color: '#7AC555',
  resetTitle: () => set(() => ({ title: ''})),
  handleInputChange: (event) => set(() => ({ title: event.target.value })),
  handleColorChange: (color: DashboardColors) => set(() => ({ color })),
});
