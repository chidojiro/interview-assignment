import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../../../components/notifications/Banner';

describe('Banner component', () => {
  const onCloseMock = jest.fn();

  afterEach(() => {
    onCloseMock.mockClear();
  });

  it('renders with required props', () => {
    const { getByText } = render(
      <Banner
        title="Test Title"
        onClose={onCloseMock}
      >
        Test Content
      </Banner>,
    );

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies error background color when type is "error"', () => {
    const { container } = render(
      <Banner
        title="Test Title"
        onClose={onCloseMock}
        type="error"
      >
        Test Content
      </Banner>,
    );

    expect(container.firstChild).toHaveClass('bg-variant-brand-alert');
  });

  it('renders button when button prop is provided', () => {
    const { queryAllByText } = render(
      <Banner
        title="Test Title"
        onClose={onCloseMock}
        button={<button type="button">Custom Button</button>}
      >
        Test Content
      </Banner>,
    );

    const button = queryAllByText('Custom Button');
    expect(button[0]).toBeInTheDocument();
  });

  it('hides close button on desktop when hideCloseButtonOnDesktop is true', () => {
    const { getByLabelText } = render(
      <Banner
        title="Test Title"
        onClose={onCloseMock}
        hideCloseButtonOnDesktop
      >
        Test Content
      </Banner>,
    );

    const closeButton = getByLabelText('close');
    expect(closeButton).toHaveClass('hidden--from-l');
  });
});
