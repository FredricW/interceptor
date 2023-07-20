import { DarkmodeSwitch } from '../components/DarkmodeSwitch';
import { Label } from '@fredricw/components';
import { Page } from '../components/Page';

export const Settings = () => {
  return (
    <Page>
      <div className="flex grow flex-col gap-4 w-full">
        <div className="flex items-center justify-between space-x-4 rounded-md border p-4">
          <Label htmlFor="darkmode-switch" className="cursor-pointer">
            Dark Mode
          </Label>
          <DarkmodeSwitch />
        </div>
      </div>
    </Page>
  );
};
