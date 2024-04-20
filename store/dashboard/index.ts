import { create } from 'zustand';
import { newDashbaordModalSlice, NewDashboardModalState } from './new-dashboard-modal-slice';

type SliceCreator = NewDashboardModalState;

export const useDashboardsStore = create<SliceCreator>((...args) => ({
  ...newDashbaordModalSlice(...args),
}));
