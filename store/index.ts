import { create } from 'zustand';
import { toggleSlice, ToggleState } from './toggle-slice';

export const useBoundStore = create<ToggleState>((...args) => ({
  ...toggleSlice(...args),
}));
