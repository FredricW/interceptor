import { useAppStore } from '../useAppStore';
export const InterceptorApp = () => {
  const appStore = useAppStore();
  return (
    <div className="i-bg-slate-900 i-text-white">
      <h1>Interceptor App</h1>
    </div>
  );
};
