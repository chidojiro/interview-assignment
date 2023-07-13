import React from 'react';
import Loader from '../../loaders/Loader';

function ChatLoader() {
  return (
    <div className="chat-content__wrapper" data-rs-chat-content="bot">
      <div className="chat__content chat__content--bot speech-bubble speech-bubble--bot flex items-center">
        <Loader color="brand-secondary" />
      </div>
    </div>
  );
}

export default ChatLoader;
