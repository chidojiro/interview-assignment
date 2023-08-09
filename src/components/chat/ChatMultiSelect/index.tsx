import React, { useEffect } from 'react';
import { ChatMultiSelectProps } from './ChatMultiSelect.types';
import TagCheckbox from '../../tags/TagCheckbox';

function ChatMultiSelect({ items, onMultiSelectChange }: ChatMultiSelectProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.dataset.rendered) {
      // We add ref and data attribute - React renders elements twice and respectively attaches the event listeners twice.
      ref.current.dataset.rendered = 'rendered';
      const multiSelectButtons = document.querySelector('[data-rs-chat-tags]');
      if (!multiSelectButtons) return;

      if ((window as Window).orbit && (window as Window).orbit?.chatInstance) {
        (window as Window).orbit?.chatInstance?.tagHandler();
      }
    }
  }, []);

  return (
    <div className="chat-content__wrapper chat-content__wrapper--first" data-rs-chat-tags data-rs-chat-content="bot" ref={ref}>
      <div className="chat__content chat__content--bot">
        {items.map((item) => (
          <TagCheckbox
            handleChange={() => {
              onMultiSelectChange(item);
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
