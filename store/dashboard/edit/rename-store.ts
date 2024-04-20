import { create } from "zustand";

export interface PaginationState {
  name: string;
  setName: (rename: string) => void;
}

export const useRenameStore = create<PaginationState>((set) => ({
  name: '',
  setName: (rename: string) => set(() => ({ name: rename })),
}));