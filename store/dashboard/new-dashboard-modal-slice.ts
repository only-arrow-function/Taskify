import { ChangeEvent, ChangeEventHandler } from 'react';
import { StateCreator } from 'zustand';
import { DashboardColors } from '@/components/dashboard/dashboard.constants';

export interface NewDashboardModalState {
  color: DashboardColors;
  handleColorChange: (color: DashboardColors) => void;
}

// only use for color!
export const newDashboardModalSlice: StateCreator<NewDashboardModalState> = (set) => ({
  color: '#7AC555',
  handleColorChange: (color: DashboardColors) => set(() => ({ color })),
});
