import { create } from 'zustand';
import {
  newDashbaordModalSlice,
  NewDashboardModalState,
} from './modal/new-dashboard-slice';
import { toggleSlice, ToggleState } from './toggle-slice';

export const useBoundStore = create<ToggleState & NewDashboardModalState>(
  (...args) => ({
    ...toggleSlice(...args),
    ...newDashbaordModalSlice(...args),
  }),
);
