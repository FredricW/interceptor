import { create } from 'zustand';

export enum Page {
  Home = 'home',
}

export interface AppState {
  page: Page;
  isVisible: boolean;
  setPage: (page: Page) => void;
  setIsVisible: (isVisible: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  page: Page.Home,
  isVisible: true,
  setPage: (page) => set({ page }),
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
}));
