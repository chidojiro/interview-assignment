// Toast.test.tsx
import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react';
import Toast from '../../../components/notifications/Toast';

describe('Toast component', () => {
  // Reusable data for test cases
  const testToastTitle = 'Toast title';
  const testToastId = 'test-toast-id';

  const defaultProps = {
    title: testToastTitle,
    id: testToastId,
    onClose: jest.fn(),
    onSuccess: jest.fn(),
  };

  it('renders the toast component with default button texts and closes after 5 seconds', async () => {
    render(<div data-testid={testToastId}><Toast {...defaultProps} /></div>);

    // The title renders
    expect(await screen.findByText(testToastTitle)).toBeInTheDocument();

    // Toast should be visible initially
    expect(screen.getByTestId(testToastId).firstChild).toHaveClass('toast--active');

    // Toast should close after 5 seconds
    await waitFor(() => {
      expect(screen.getByTestId(testToastId).firstChild).toHaveClass('closable--closed');
    }, { timeout: 5000 });

    // onClose callback calls after 5.2 seconds
    await waitFor(() => {
      expect(defaultProps.onClose).toHaveBeenCalled();
    }, { timeout: 5200 });
  }, 5500);

  it('renders the toast component with custom button texts and closes when close button is clicked', async () => {
    render(
      <div data-testid={testToastId}>
        <Toast
          {...defaultProps}
          buttonCloseText="Close"
          buttonSuccessText="Success"
        />
      </div>,
    );

    // The title renders
    expect(await screen.findByText(testToastTitle)).toBeInTheDocument();

    // Toast should be visible initially
    expect(screen.getByTestId(testToastId).firstChild).toHaveClass('toast--active');

    // Click the close button
    fireEvent.click(screen.getByLabelText('close'));

    // Toast should close
    await waitFor(() => {
      expect(screen.getByTestId(testToastId).firstChild).toHaveClass('closable--closed');
    }, { timeout: 300 });

    // onClose callback calls when we click the close button
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('renders the toast component with custom button texts and calls onSuccess when success button is clicked', async () => {
    render(
      <div data-testid={testToastId}>
        <Toast
          {...defaultProps}
          buttonCloseText="Close"
          buttonSuccessText="Success"
        />
      </div>,
    );

    // Assert the title renders
    expect(await screen.findByText(testToastTitle)).toBeInTheDocument();

    // Toast should be visible initially
    expect(screen.getByTestId(testToastId).firstChild).toHaveClass('toast--active');

    // Click the success button
    fireEvent.click(screen.getByText('Success'));

    // Toast should close
    await waitFor(() => {
      expect(screen.getByTestId(testToastId).firstChild).toHaveClass('closable--closed');
    }, { timeout: 300 });

    // onSuccess callback calls when we click on the success button
    await waitFor(() => {
      expect(defaultProps.onSuccess).toHaveBeenCalled();
    }, { timeout: 1000 });
  });

  it('does not render the buttons if buttonCloseText and buttonSuccessText are not provided', async () => {
    render(<div data-testid={testToastId}><Toast {...defaultProps} /></div>);

    // Assert the title renders
    expect(await screen.findByText(testToastTitle)).toBeInTheDocument();

    // Buttons shouldn't render
    expect(screen.getByTestId(testToastId).querySelector('toast__cta')).not.toBeInTheDocument();
  });

  it('renders the toast component with anchor attribute if anchor prop is provided', async () => {
    const anchor = 'test-anchor';
    render(<div data-testid={testToastId}><Toast {...defaultProps} anchor={anchor} /></div>);

    // Toast should have the anchor attribute
    expect(screen.getByTestId(testToastId).firstChild).toHaveAttribute(
      'data-rs-toast-anchor',
      anchor,
    );
  });
});
