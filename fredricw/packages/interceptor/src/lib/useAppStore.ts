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

const setBodyClass = (darkMode: boolean) => {
  const darkClass = 'i-dark';
  if (darkMode) {
    document.body.classList.add(darkClass);
  } else {
    document.body.classList.remove(darkClass);
  }
};

export const useAppStore = create<AppState>((set) => ({
  darkMode: false,
  setDarkMode: (darkMode) => {
    set({ darkMode });
    setBodyClass(darkMode);
  },

  page: Page.Home,
  setPage: (page) => set({ page }),

  isVisible: true,
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
}));
