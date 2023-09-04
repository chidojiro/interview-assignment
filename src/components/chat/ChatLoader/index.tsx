import React from 'react';
import Loader from '../../loaders/Loader';

function ChatLoader({ logoAltText = 'logo Randstad' }) {
  const imgPath = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? '/img/randstad-wings.jpg' : `${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/randstad-wings.jpg`;
  return (
    <div className="chat-content__wrapper" data-rs-chat-content="bot">
      <div className="avatar aspect-ratio aspect-ratio--1-1 avatar--XXS speech-bubble__avatar">
        <img src={imgPath} alt={logoAltText} />
      </div>
      <div className="chat__content chat__content--bot speech-bubble speech-bubble--bot flex items-center">
        <Loader color="brand-secondary" />
      </div>
    </div>
  );
}

export default ChatLoader;
