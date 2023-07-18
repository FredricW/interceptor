'use client';

import { interceptor } from '@fredricw/interceptor';
// eslint-disable-next-line @nx/enforce-module-boundaries
// import { interceptor } from '../../../dist/packages/interceptor';
// eslint-disable-next-line @nx/enforce-module-boundaries
// import '../../../dist/packages/interceptor/style.css';

/* eslint-disable-next-line */
export interface InterceptorProps {}

export function Interceptor(props: InterceptorProps) {
  interceptor();
  return null;
}

export default Interceptor;
