import React, { useEffect, useState } from 'react';
import { ChatMultiSelectProps } from './ChatMultiSelect.types';
import TagCheckbox from '../../tags/TagCheckbox';
import { ConversationMultiSelectItem } from '../../../utils/chatApi/types';

function ChatMultiSelect({ items }: ChatMultiSelectProps) {
  const [selectedItems, setSelectedItems] = useState<Array<ConversationMultiSelectItem>>([]);

  useEffect(() => {
    const multiSelectButtons = document.querySelector('[data-rs-chat-tags]');
    if (!multiSelectButtons) return;

    if ((window as Window).orbit && (window as Window).orbit?.chatInstance) {
      (window as Window).orbit?.chatInstance?.tagHandler();
    }
  }, []);

  return (
    <div className="chat-content__wrapper chat-content__wrapper--first" data-rs-chat-tags data-rs-chat-content="bot">
      <div className="chat__content chat__content--bot">
        {items.map((item) => (
          <TagCheckbox
            handleChange={() => {
              const found = selectedItems.findIndex((predicated) => predicated.param === item.param);
              if (found !== -1) {
                const selectedItemsCopy = [...selectedItems];
                selectedItemsCopy.splice(found, 1);
                setSelectedItems(selectedItemsCopy);
              } else {
                setSelectedItems((oldItems) => [...oldItems, item]);
              }
            }}
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
