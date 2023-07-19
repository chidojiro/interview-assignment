import React, { useEffect } from 'react';
import { ChatQuickSuggestProps } from './ChatQuickSuggest.types';
import Button from '../../buttons/Button';

function ChatQuickSuggest({ items }: ChatQuickSuggestProps) {
  useEffect(() => {
    if ((window as Window).orbit && (window as Window).orbit?.chatInstance) {
      (window as Window).orbit?.chatInstance?.quickSuggestButtonsHandler();
    }
  }, []);

  return (
    <div className="chat-content__wrapper chat-content__wrapper--first mb-xxs" data-rs-chat-quick-suggest data-rs-chat-content="bot">
      {items.map((item) => (
        <Button
          key={item.value}
          data-rs-chat-quick-suggest-button
          className="chat__content chat__content--bot button button--s button--dark-blue"
        >
          {item.value}
        </Button>
      ))}
    </div>
  );
}

export default ChatQuickSuggest;
