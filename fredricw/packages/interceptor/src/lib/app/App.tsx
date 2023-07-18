import clsx from 'clsx';
import { useAppStore } from '../useAppStore';
import { Dialog, DialogContent } from '@fredricw/components';
import { InterceptorConfig } from '../InterceptorRoot';
import { useHotkeys } from 'react-hotkeys-hook';
import { AppRouter } from './AppRouter';

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
          <AppRouter />
        </DialogContent>
      </Dialog>
    </div>
  );
};
