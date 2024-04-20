import { create, StateCreator } from 'zustand';

export interface ToggleState {
  isToggle: boolean;
  handleOpenToggle: () => void;
  handleCloseToggle: () => void;
  handleToggle: () => void;
}

export const useToggleStore = create<ToggleState>((set) => ({
  isToggle: false,
  handleOpenToggle: () => set(() => ({ isToggle: true })),
  handleCloseToggle: () => set(() => ({ isToggle: false })),
  handleToggle: () => set((prevToggleState) => ({ isToggle: !prevToggleState })),
}));
