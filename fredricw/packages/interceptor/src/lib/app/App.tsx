import clsx from 'clsx';
import { useAppStore } from '../useAppStore';
import {
  Button,
  Badge,
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@fredricw/components';

export const InterceptorApp = () => {
  const appStore = useAppStore();
  return (
    <div className={clsx('font-sans')}>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
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
