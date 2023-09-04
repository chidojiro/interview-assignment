import React from 'react';
import { render } from '@testing-library/react';
import Preloader from '../../../components/loaders/Preloader';

describe('Preloader component', () => {
  // Reusable data variables
  const buttonClass = 'button button--preloader button--m button--plain';
  const dotsClass = 'dots';

  it('should render correctly', () => {
    const { getByTestId, getByText, getByRole } = render(<div data-testid="test-id"><Preloader /></div>);

    const preloaderContainer = getByTestId('test-id');
    expect(preloaderContainer).toBeInTheDocument();

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveClass(buttonClass);

    const dots = getByText('', { selector: `.${dotsClass}` });
    expect(dots).toBeInTheDocument();
  });

  it('should have the correct dots element', () => {
    const { getByText } = render(<div data-testid="test-id"><Preloader /></div>);
    const dots = getByText('', { selector: `.${dotsClass}` });
    expect(dots).toHaveClass(dotsClass);
  });
});
