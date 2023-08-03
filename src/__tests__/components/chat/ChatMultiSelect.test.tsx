import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatMultiSelect from '../../../components/chat/ChatMultiSelect';

describe('ChatMultiSelect', () => {
  it('renders the component correctly', () => {
    const items = [
      { param: '1', text: 'Item 1' },
      { param: '2', text: 'Item 2' },
    ];

    const { container } = render(
      <div data-testid="chat-multi-select">
        <ChatMultiSelect items={items} />
      </div>,
    );

    // Check if the component renders
    const chatMultiSelectElement = screen.getByTestId('chat-multi-select');
    expect(chatMultiSelectElement).toBeInTheDocument();

    // Check if the items render
    const tagCheckboxes = container.querySelectorAll('.tag--add');
    expect(tagCheckboxes.length).toBe(2);
    expect(tagCheckboxes[0].textContent).toBe('Item 1');
    expect(tagCheckboxes[1].textContent).toBe('Item 2');
  });

  it('calls handleTagDialogButtons method when mounted', () => {
    const handleTagDialogButtonsMock = jest.fn();
    (window as any).orbit = {
      chatInstance: {
        handleTagDialogButtons: handleTagDialogButtonsMock,
      },
    };

    render(<ChatMultiSelect items={[]} />);

    // Check if handleTagDialogButtons method calls
    expect(handleTagDialogButtonsMock).toHaveBeenCalledTimes(1);
  });
});
