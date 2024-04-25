import { create } from 'zustand';
import { newDashboardModalSlice, NewDashboardModalState } from './new-dashboard-modal-slice';

type SliceCreator = NewDashboardModalState;

export const useDashboardsStore = create<SliceCreator>((...args) => ({
  ...newDashboardModalSlice(...args),
}));
