import React, { useEffect } from 'react';
import { ChatMultiSelectProps } from './ChatMultiSelect.types';
import TagCheckbox from '../../tags/TagCheckbox';

function ChatMultiSelect({ items }: ChatMultiSelectProps) {
  useEffect(() => {
    const multiSelectButtons = document.querySelector('[data-rs-chat-tags]');
    if (!multiSelectButtons) return;

    if ((window as Window).orbit && (window as Window).orbit?.chatInstance) {
      console.log(window.orbit?.chatInstance);
      (window as Window).orbit?.chatInstance?.handleTagDialogButtons();
    }
  }, []);

  return (
    <div className="chat-content__wrapper chat-content__wrapper--first" data-rs-chat-tags data-rs-chat-content="bot">
      <div className="chat__content chat__content--bot">
        {items.map((item) => (
          <TagCheckbox
            key={item.param}
            className="mb-xxs mr-xxs"
            value={item.param as string}
            label={item.text as string}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatMultiSelect;
