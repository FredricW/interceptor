'use client';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { InterceptorApp } from './app/App';
import './styles.css';

export interface InterceptorHotkeys {
  toggleUi: string;
}

export interface InterceptorConfig {
  hotkeys?: Partial<InterceptorHotkeys>;
  startOpened?: boolean;
}

export const init = (config?: InterceptorConfig) => {
  if (config) {
    console.debug('[Interceptor]: Config', config);
  } else {
    console.debug('[Interceptor]: No config provided');
  }

  sessionStorage.setItem('interceptor', 'true');

  // create a new element on the body to render the app into
  // then give it an id of 'interceptor-root' so we can find it later
  const interceptorRoot = document.createElement('div');
  interceptorRoot.id = 'interceptor-root';
  document.body.appendChild(interceptorRoot);
  const root = ReactDOM.createRoot(interceptorRoot);

  root.render(
    <StrictMode>
      <InterceptorApp />
    </StrictMode>
  );
};
