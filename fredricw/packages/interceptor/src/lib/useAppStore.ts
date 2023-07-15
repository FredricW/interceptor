import { create } from 'zustand';

export enum Page {
  Home = 'home',
}

export interface AppState {
  darkMode: boolean;
  setDarkMode: (state: boolean) => void;
  page: Page;
  isVisible: boolean;
  setPage: (page: Page) => void;
  setIsVisible: (isVisible: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  darkMode: false,
  setDarkMode: (darkMode) => set({ darkMode }),

  page: Page.Home,
  setPage: (page) => set({ page }),

  isVisible: true,
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
}));
