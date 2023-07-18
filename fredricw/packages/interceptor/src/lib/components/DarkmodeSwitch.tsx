import { Button } from '@fredricw/components';
import { useAppStore } from '../useAppStore';

export const DarkmodeSwitch = () => {
  const appStore = useAppStore();
  return (
    <Button
      variant="default"
      onClick={() => appStore.setDarkMode(!appStore.darkMode)}
    >
      {appStore.darkMode ? 'Light' : 'Dark'}
    </Button>
  );
};
