import { create, StateCreator } from 'zustand';

export interface PaginationState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const usePaginationStore = create<PaginationState>((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set(() => ({ currentPage: page })),
}));
