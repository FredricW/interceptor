import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css';

import App from './app/app';

import { interceptor } from '@fredricw/interceptor';

console.log('hello world! dsfds', interceptor());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
