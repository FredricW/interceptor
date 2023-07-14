import { create } from 'zustand';

export enum Page {
  Home = 'home',
}

export interface AppState {
  page: Page;
  isVisible: boolean;
}

export const useAppStore = create<AppState>((set) => ({
  page: Page.Home,
  isVisible: true,
  setPage: (page: Page) => set({ page }),
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
}));
