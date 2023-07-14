import { InterceptorConfig } from './InterceptorRoot';

export function interceptor(config?: InterceptorConfig) {
  try {
    import('./InterceptorRoot').then((module) => {
      module.init(config);
    });
  } catch (e) {
    console.error(e);
  }
}
