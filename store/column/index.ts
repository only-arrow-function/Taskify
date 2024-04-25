import { create } from 'zustand';
import { columnState, columnModalSlice } from './column-modal-slice';

type SliceCreator = columnState;

export const useColumnStore = create<SliceCreator>((...args) => ({
  ...columnModalSlice(...args),
}));
