import clsx from 'clsx';
import { useAppStore } from '../useAppStore';
import { Button, Badge } from '@fredricw/components';

export const InterceptorApp = () => {
  const appStore = useAppStore();
  return (
    <div className={clsx('font-sans', { dark: appStore.darkMode })}>
      <div className="bg-background text-foreground">
        <h1>Interceptor App</h1>
        <Badge variant="secondary">{appStore.page}</Badge>

        <Button
          variant="default"
          onClick={() => appStore.setDarkMode(!appStore.darkMode)}
        >
          {appStore.darkMode ? 'Light' : 'Dark'}
        </Button>
      </div>
    </div>
  );
};
