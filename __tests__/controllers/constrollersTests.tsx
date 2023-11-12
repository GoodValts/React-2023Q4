import React from 'react';
import { render } from '@testing-library/react';
import AppContentProvider from '../../src/common/controllers/appControllers';

describe('404 Page', () => {
  test('content is exist', () => {
    expect(AppContentProvider).toBeDefined();
  });

  test('renders children components', () => {
    const ChildComponent = () => <div>Child component</div>;
    const { getByText } = render(
      <AppContentProvider>
        <ChildComponent />
      </AppContentProvider>
    );

    const childComponent = getByText('Child component');
    expect(childComponent).toBeInTheDocument();
  });
});
