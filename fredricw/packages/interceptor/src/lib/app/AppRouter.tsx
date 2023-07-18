import { Page, useAppStore } from '../useAppStore';
import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@fredricw/components';

export const AppRouter = () => {
  const appStore = useAppStore();

  return (
    <Tabs
      value={appStore.page}
      onValueChange={(page) => {
        appStore.setPage(page as Page);
      }}
    >
      <TabsList>
        {Object.entries(Page).map(([key, value]) => (
          <TabsTrigger value={value}>{key}</TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={Page.Home}>
        <Home />
      </TabsContent>

      <TabsContent value={Page.Settings}>
        <Settings />
      </TabsContent>
    </Tabs>
  );
};
