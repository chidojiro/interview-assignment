import React from 'react';
import cn from 'classnames';
import dompurify from 'dompurify';
import { ChatReplyProps } from './ChatReply';

function ChatReply({
  type, first = false, logoAltText = 'logo Randstad', children, ...props
}: ChatReplyProps) {
  const imgPath = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? '/img/randstad-wings.jpg' : `${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/randstad-wings.jpg`;
  const sanitizer = dompurify.sanitize;
  return (
    <div
      className={cn('chat-content__wrapper', {
        'chat-content__wrapper--first': first,
      })}
      data-rs-chat-content={type}
    >
      {type === 'bot' && first && (
        <div className="avatar aspect-ratio aspect-ratio--1-1 avatar--XXS speech-bubble__avatar">
          <img src={imgPath} alt={logoAltText} />
        </div>
      )}
      {/* Chat replies come as string with HTML. */}
      {/* eslint-disable-next-line react/no-danger */}
      <div className={cn(`chat__content chat__content--${type} speech-bubble speech-bubble--${type}`)} {...props} dangerouslySetInnerHTML={{ __html: sanitizer(children || '') }} />
    </div>
  );
}

export default ChatReply;
