import { ChangeEvent } from 'react';
import { StateCreator } from 'zustand';

export interface inviteState {
  email: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  removeEmail: () => void;
}

export const inviteModalSlice: StateCreator<inviteState> = (set) => ({
  email: '',
  handleInputChange: (event) => {
    set(() => ({ email: event.target.value }));
  },
  removeEmail: () => set(() => ({ email: '' })),
});
