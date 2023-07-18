import { Page, useAppStore } from '../useAppStore';
import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';

export const AppRouter = () => {
  const appStore = useAppStore();

  switch (appStore.page) {
    case Page.Home:
      return <Home />;
    case Page.Settings:
      return <Settings />;
    default:
      return <Home />;
  }
};
