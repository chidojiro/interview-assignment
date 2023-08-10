import React, {
  useEffect, useRef, KeyboardEvent, useState,
} from 'react';
import cn from 'classnames';
import Icon from '../../common/Icon';
import type { BaseEvent, ChatProps } from './Chat.types';
import ChatLoader from '../ChatLoader';
import ChatSettings from '../ChatSettings';
import useHandleChatReplies from '../../../hooks/chat/useHandleChatReplies';
import useHandleContinueConversation from '../../../hooks/chat/useHandleContinueConversation';

function Chat({
  settings,
  conversation,
  jobId,
  applicationId,

}: ChatProps) {
  const {
    title,
    closeButtonAriaLabel,
    logoAltText = 'logo Randstad',
    textAreaPlaceholder = 'start typing ...',
    sendButtonText = 'send',
    deselectButtonText = 'deselect',
    submitButtonText = 'submit',
    selectedOptionsText = 'selected',
    startConversationButtonText,
    hiddenByDefault = true,
  } = settings;
  const ref = useRef(null);
  const textAreaRef = useRef(null);
  const chatBoxRef = useRef(null);

  const {
    replies, setChatReplies, conversationData, setConversationData, setReplyLoading, replyLoading,
  } = conversation;

  const [input, setInput] = useState('');
  const {
    handleSendButton, handleQuickSuggest, handleMultiSelectSubmit,
  } = useHandleContinueConversation(replies, setChatReplies, conversationData, setConversationData, replyLoading, setReplyLoading, jobId, applicationId);
  const {
    replyComponents, clearMultiSelect, submitMultiSelect,
  } = useHandleChatReplies(replies, handleQuickSuggest, handleMultiSelectSubmit);

  const imgPath = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? '/src/assets/img/randstad-wings.jpg' : `${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/randstad-wings.jpg`;
  const handleSendOnEnterPress = (e: KeyboardEvent) => {
    if ((e.target as HTMLTextAreaElement).value.trim().length && e.key === 'Enter') {
      handleSendButton(input);
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const { Chat: OrbitComponent } = require('@ffw/randstad-local-orbit/js/overrides/chat');
    window.orbit = window.orbit || {};
    window.orbit.chatInstance = new OrbitComponent(ref.current);
  }, []);

  useEffect(() => {
    const handleChange = (e: BaseEvent) => {
      setInput(e.target.value);
    };

    if (!textAreaRef.current) return;
    const { TextArea: OrbitComponent } = require('@ffw/randstad-local-orbit/original/js/components/text-area');
    new OrbitComponent(textAreaRef.current);

    // TODO: use textare ref.
    if (handleChange && window.orbit?.chatInstance) {
      window.orbit.chatInstance.textarea.addEventListener('input', handleChange);
    }

    // We need to delete the handleOnChange event.
    // eslint-disable-next-line consistent-return
    return () => {
      if (handleChange && window.orbit?.chatInstance) {
        window.orbit.chatInstance.textarea.removeEventListener('input', handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (replyLoading || !textAreaRef.current) return;
    (textAreaRef.current as HTMLTextAreaElement).focus();
  }, [replyLoading]);

  useEffect(() => {
    if (chatBoxRef && chatBoxRef.current) {
      (chatBoxRef.current as HTMLElement).scrollTop = (chatBoxRef.current as HTMLElement).scrollHeight;
    }
  }, [replyComponents, replyLoading]);

  return (
    <div className="bluex-chat-bot" data-chatbot-id="some-chat-id" data-chatbot-init-timeout="120" data-chatbot-re-init="true" data-chatbot-dynamo-langcode="en" data-chatbot-langcode="en">
      <div
        className={cn('chat chat--embed', {
          'display-none': hiddenByDefault,
        })}
        data-rs-chat=""
        ref={ref}
      >
        <div className="chat__wrapper" data-rs-chat-main>
          <div className="chat__header divider divider--is-hidden" data-rs-chat-header="">
            <div className="avatar aspect-ratio aspect-ratio--1-1 avatar--S mr-xs">
              <img src={imgPath} alt={logoAltText} />
            </div>
            <span className="text-body-m text-brand-secondary flex-grow">{title}</span>
            <button type="button" className="button--icon-only flex s:px-xs l:pr-none hidden" data-rs-chat-settings-button="" aria-label="">
              <Icon iconType="settings" iconClassName="icon icon--inline text-brand-primary fill-current" />
            </button>
            <button type="button" className="button--icon-only flex pl-xs  hidden--from-l" data-rs-chat-close="" aria-label={closeButtonAriaLabel}>
              <Icon iconType="chevron-down" iconClassName="icon icon--inline text-brand-primary fill-current" />
            </button>
          </div>
          <div className="chat__box" data-rs-chat-box="chat" data-rs-textarea-scroll-area="" ref={chatBoxRef}>
            {replyComponents}
            {replyLoading && <ChatLoader logoAltText={logoAltText} />}
          </div>
          <div className="chat__footer divider divider--top">
            <div className="flex items-end" data-rs-chat-input>
              <textarea
                disabled={replyLoading}
                className="mr-xs flex-1 textarea--expand"
                placeholder={textAreaPlaceholder}
                rows={1}
                data-rs-textarea="expand"
                data-rs-chat-textarea=""
                ref={textAreaRef}
                onKeyDown={handleSendOnEnterPress}
              />
              <button type="button" className="button button--icon button--filled" data-rs-chat-button="" onClick={() => handleSendButton(input)}>
                <span className="button__text">{sendButtonText}</span>
                <Icon iconType="arrow-up" iconClassName="icon" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center hidden" data-rs-chat-tags-dialog="" aria-hidden="true">
              <div className="mb-xxs" data-rs-chat-tags-dialog-label="@tag selected">
                1
                {' '}
                {selectedOptionsText}
              </div>
              <div className="buttons-group">
                <button type="button" className="button button--s mr-xxs" data-rs-chat-tags-deselect-button="" aria-hidden="true" onClick={clearMultiSelect}>
                  {deselectButtonText}
                </button>
                <button type="button" className="button button--s button--filled" data-rs-chat-tags-submit-button="" aria-hidden="true" onClick={submitMultiSelect}>
                  {submitButtonText}
                </button>
              </div>
            </div>
          </div>
          <ChatSettings />
        </div>
      </div>
      <a
        href="#?"
        className="button button--m button--filled hidden--from-l display-none chat-minimized--button"
        role="button"
        tabIndex={0}
        data-rs-chat-minimized="false"
      >
        <Icon iconType="chat" iconClassName="icon icon--inline" />
        {startConversationButtonText}
      </a>
    </div>
  );
}

export default Chat;
