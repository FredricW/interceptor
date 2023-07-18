import { render } from '@testing-library/react';

import Interceptor from './Interceptor';

describe('Interceptor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Interceptor />);
    expect(baseElement).toBeTruthy();
  });
});
