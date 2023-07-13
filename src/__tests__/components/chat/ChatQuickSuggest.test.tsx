import React from 'react';
import { render } from '@testing-library/react';
import ChatQuickSuggest from '../../../components/chat/ChatQuickSuggest';
import { ChatQuickSuggestProps } from '../../../components/chat/ChatQuickSuggest/ChatQuickSuggest.types';

describe('ChatQuickSuggest', () => {
  test('renders without error when items are provided', () => {
    const items: ChatQuickSuggestProps['items'] = [
      { value: 'Option 1' },
      { value: 'Option 2' },
    ];

    const { getByText } = render(<ChatQuickSuggest items={items} />);

    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
  });
});
