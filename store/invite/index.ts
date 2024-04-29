import { create } from 'zustand';
import { inviteState, inviteModalSlice } from './invite-modal-slice';

type SliceCreator = inviteState;

export const useInviteStore = create<SliceCreator>((...args) => ({
  ...inviteModalSlice(...args),
}));
