import React from 'react';

function ChatLoader() {
  return (
    <div className="chat-content__wrapper" data-rs-chat-content="bot">
      <div className="chat__content chat__content--bot speech-bubble speech-bubble--bot flex items-center">
        <span className="loader__wrapper loader__wrapper--brand-secondary">
          <span
            className="loader"
          />
        </span>
      </div>
    </div>
  );
}

export default ChatLoader;
