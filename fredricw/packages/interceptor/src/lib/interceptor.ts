import { InterceptorConfig } from './InterceptorRoot';

export function interceptor(config?: InterceptorConfig) {
  try {
    // abort if not in browser
    if (typeof window === 'undefined') {
      console.debug('Interceptor can only run in the browser, aborting...');
      return;
    }

    // abort if disabled
    if (sessionStorage.getItem('interceptor') === 'false') {
      console.debug('Interceptor is disabled, aborting...');
      return;
    }

    const instance = document.querySelector('#interceptor-root');

    // abort if already running
    if (instance) {
      console.debug('Interceptor is already running, aborting...');
      return;
    }

    console.debug('Starting Interceptor...');
    import('./InterceptorRoot').then((module) => {
      module.init(config);
    });
  } catch (e) {
    console.error(e);
  }
}
