import { DarkmodeSwitch } from '../components/DarkmodeSwitch';

export const Settings = () => {
  return (
    <div className="flex grow flex-col gap-4 h-full w-full">
      <h1>Settings</h1>

      <DarkmodeSwitch />
    </div>
  );
};
