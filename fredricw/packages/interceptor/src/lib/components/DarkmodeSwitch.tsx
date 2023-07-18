import { Switch } from '@fredricw/components';
import { useAppStore } from '../useAppStore';

export const DarkmodeSwitch = () => {
  const appStore = useAppStore();
  return (
    <Switch
      checked={appStore.darkMode}
      onCheckedChange={(value) => appStore.setDarkMode(value)}
      id="darkmode-switch"
    />
  );
};
