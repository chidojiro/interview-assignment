import React from 'react';
import { render } from '@testing-library/react';
import HeaderTitle from '../../components/headers/HeaderTitle';

describe('HeaderTitle component tests', () => {
  test('Header title exist and has right text content', () => {
    const { container } = render(<HeaderTitle>hello there gorgeous.</HeaderTitle>);
    const headerTitleElement = container.querySelector('.header-title');
    expect(headerTitleElement)
      .toBeInTheDocument();
    expect(headerTitleElement)
      .toHaveTextContent('hello there gorgeous.');
  });

  test('Header title has markup content', () => {
    const { container } = render(
      <HeaderTitle>
        <>
          hello there <a href="#">gorgeous</a>.
        </>
      </HeaderTitle>,
    );
    const headerTitleElement = container.querySelector('.header-title');
    expect(headerTitleElement)
      .toContainHTML('<a href="#">gorgeous</a>');
  });
});
