import { useAppStore } from '../useAppStore';
import { Button, Badge } from '@fredricw/components';

export const InterceptorApp = () => {
  const appStore = useAppStore();
  return (
    <div className={appStore.darkMode ? 'dark' : ''}>
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
