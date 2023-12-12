import React from 'react';
import {
  render,
  fireEvent,
  screen, waitFor,
} from '@testing-library/react';
import ConfirmationModal from '../../../components/overlays/ConfirmationModal';

// Reusable variables
const mockProps = {
  title: 'are you sure?',
  content: 'Test Content',
  onClose: jest.fn(),
  onCancelClick: jest.fn(),
  onSubmit: jest.fn(),
  ariaLabelClose: 'close',
  confirmButtonText: 'yes',
  cancelButtonText: 'cancel',
};

const renderModal = (props = {}) => {
  const mergedProps = { ...mockProps, ...props };
  return render(<ConfirmationModal {...mergedProps} />);
};

describe('ConfirmationModal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the modal with default props', () => {
    renderModal();
    // Write your assertions for the default render here
    expect(screen.getByText('are you sure?')).toBeInTheDocument();
    // ... other assertions
  });

  it('should render the modal with custom props', () => {
    const customProps = {
      title: 'Custom Title',
      content: 'Custom Content',
      ariaLabelClose: 'close modal',
      confirmButtonText: 'confirm',
      cancelButtonText: 'cancel',
    };
    renderModal(customProps);
    // Write your assertions for the custom render here
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    // ... other assertions
  });

  it('should call onClose when clicking close button', async () => {
    renderModal();
    // Click the close button
    fireEvent.click(screen.getAllByLabelText('close')[0] as HTMLElement);
    // onClose callback calls when we click the close button
    await waitFor(() => {
      expect(mockProps.onClose).toHaveBeenCalled();
    }, { timeout: 300 });
  });

  it('should call onCancelClick when clicking cancel button', async () => {
    renderModal();
    // Click the close button
    fireEvent.click(screen.getAllByText('cancel')[0] as HTMLButtonElement);
    // onCancelClick callback calls when we click the cancel button
    await waitFor(() => {
      expect(mockProps.onCancelClick).toHaveBeenCalled();
    }, { timeout: 300 });
  });

  it('should call onSubmit when clicking confirm button', () => {
    renderModal();
    const confirmButton = screen.getAllByText('yes')[0] as HTMLButtonElement;
    fireEvent.click(confirmButton);
    expect(mockProps.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should not call modalClose when a non-escape key is pressed', () => {
    const { container } = renderModal();
    fireEvent.keyDown(container, { key: 'Enter' });
    expect(mockProps.onClose).not.toHaveBeenCalled();
  });

  // More test cases as needed for different scenarios...
});
