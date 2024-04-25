import { ChangeEvent } from 'react';
import { StateCreator } from 'zustand';

export interface columnState {
  title: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  removeTitle: () => void;
}

export const columnModalSlice: StateCreator<columnState> = (set) => ({
  title: '',
  handleInputChange: (event) => {
    set(() => ({ title: event.target.value }));
  },
  removeTitle: () => set(() => ({ title: '' })),
});
