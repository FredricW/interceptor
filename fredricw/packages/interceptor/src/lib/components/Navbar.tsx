import { Button } from '@fredricw/components';
import { Page, useAppStore } from '../useAppStore';

export const Navbar = () => {
  const appStore = useAppStore();
  return (
    <div className="flex gap-2">
      {Object.entries(Page).map(([key, value]) => (
        <Button
          key={key}
          variant={appStore.page === value ? 'default' : 'secondary'}
          onClick={() => appStore.setPage(value)}
          // className={appStore.page === value ? 'font-bold' : ''}
        >
          {key}
        </Button>
      ))}
    </div>
  );
};
