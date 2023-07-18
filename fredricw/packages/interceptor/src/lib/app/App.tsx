import clsx from 'clsx';
import { useAppStore } from '../useAppStore';
import { Button, Badge, Dialog, DialogContent } from '@fredricw/components';
import { InterceptorConfig } from '../InterceptorRoot';
import { useHotkeys } from 'react-hotkeys-hook';

export const InterceptorApp = (props: { config?: InterceptorConfig }) => {
  const appStore = useAppStore();

  useHotkeys(
    props.config?.hotkeys?.toggleUi ?? 'ctrl+d',
    () => appStore.setIsVisible(!appStore.isVisible),
    [appStore.isVisible]
  );

  return (
    <div className={clsx('font-sans')}>
      <Dialog open={appStore.isVisible} onOpenChange={appStore.setIsVisible}>
        <DialogContent>
          <h1>Interceptor App</h1>
          <Badge variant="secondary">{appStore.page}</Badge>

          <Button
            variant="default"
            onClick={() => appStore.setDarkMode(!appStore.darkMode)}
          >
            {appStore.darkMode ? 'Light' : 'Dark'}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
