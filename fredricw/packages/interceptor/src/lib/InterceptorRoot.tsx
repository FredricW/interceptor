import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { InterceptorApp } from './app/App';

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
