import { create } from 'zustand';

interface LoggedIn {
  email: string;
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}

interface Authentication extends LoggedIn {
  setAuthentication: (user: LoggedIn) => void;
}

export const useAuthenticationStore = create<Authentication>((set) => ({
  id: 0,
  email: '',
  nickname: '',
  profileImageUrl: '',
  setAuthentication: (user: LoggedIn) =>
    set((state) => ({
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      profileImageUrl: user.profileImageUrl,
    })),
}));
