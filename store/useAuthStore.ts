import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'customer' | 'partner' | 'rider' | 'admin' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  walletBalance: number;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (userData) => set({ user: userData, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'washit-auth-storage',
    }
  )
);
