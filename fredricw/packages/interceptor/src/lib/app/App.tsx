import { useAppStore } from '../useAppStore';
import { Button, Badge } from '@fredricw/components';

export const InterceptorApp = () => {
  const appStore = useAppStore();
  return (
    <div className="bg-background text-foreground">
      <h1>Interceptor App</h1>
      <Badge variant="secondary">{appStore.page}</Badge>

      <Button
        variant="default"
        onClick={() => appStore.setIsVisible(!appStore.isVisible)}
      >
        {appStore.isVisible ? 'Hide' : 'Show'}
      </Button>
    </div>
  );
};
