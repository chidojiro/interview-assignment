import React, { useEffect } from 'react';
import type { ChatQuickSuggestProps } from './ChatQuickSuggest.types';
import Button from '../../buttons/Button';
import type { ConversationQuickSuggest } from '../../../utils';

const handleClick = (item: ConversationQuickSuggest, fn? : (item: ConversationQuickSuggest) => void) => {
  if (fn) {
    fn(item);
  }
};

function ChatQuickSuggest({ items, handleQuickSuggest }: ChatQuickSuggestProps) {
  useEffect(() => {
    if ((window as Window).orbit && (window as Window).orbit?.chatInstance) {
      (window as Window).orbit?.chatInstance?.quickSuggestButtonsHandler();
    }
  }, []);

  return (
    <div className="chat-content__wrapper chat-content__wrapper--first mb-xxs" data-rs-chat-quick-suggest data-rs-chat-content="bot">
      {items.map((item) => (
        <Button
          handleClick={() => handleClick(item, handleQuickSuggest)}
          key={item.text}
          data-rs-chat-quick-suggest-button
          className="chat__content chat__content--bot button button--s button--dark-blue"
        >
          {item.text}
        </Button>
      ))}
    </div>
  );
}

export default ChatQuickSuggest;
