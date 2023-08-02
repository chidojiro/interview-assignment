import React, {
  useEffect, useRef, useState, KeyboardEvent,
} from 'react';
import cn from 'classnames';
import Icon from '../../common/Icon';
import { ChatProps } from './Chat.types';
import ChatReply from '../ChatReply';
import ChatLoader from '../ChatLoader';
import ChatQuickSuggest from '../ChatQuickSuggest';

function Chat({
  settings,
  replies,
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
    handleSendButton,
    handleOnChange,
    handleQuickSuggest,
    replyLoading,
  } = settings;
  const [replyComponents, setReplyComponents] = useState<React.ReactNode[]>([]);
  const [replyIndexes, setReplyIndexes] = useState<Array<number>>([]);
  const ref = useRef(null);
  const textAreaRef = useRef(null);
  const chatBoxRef = useRef(null);
  const imgPath = !process.env.NEXT_PUBLIC_RESOURCE_PREFIX ? '/src/assets/img/randstad-wings.jpg' : `${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/randstad-wings.jpg`;

  const handleSendOnEnterPress = (e: KeyboardEvent) => {
    if ((e.target as HTMLTextAreaElement).value.trim().length && e.key === 'Enter') {
      handleSendButton();
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const { Chat: OrbitComponent } = require('@ffw/randstad-local-orbit/js/overrides/chat');
    window.orbit = window.orbit || {};
    window.orbit.chatInstance = new OrbitComponent(ref.current);
  }, []);

  useEffect(() => {
    if (!textAreaRef.current) return;
    const { TextArea: OrbitComponent } = require('@ffw/randstad-local-orbit/original/js/components/text-area');
    new OrbitComponent(textAreaRef.current);

    // TODO: use textare ref.
    if (handleOnChange && window.orbit?.chatInstance) {
      window.orbit.chatInstance.textarea.addEventListener('input', handleOnChange);
    }

    // We need to delete the handleOnChange event.
    // eslint-disable-next-line consistent-return
    return () => {
      if (handleOnChange && window.orbit?.chatInstance) {
        window.orbit.chatInstance.textarea.removeEventListener('input', handleOnChange);
      }
    };
  }, [handleOnChange]);

  useEffect(() => {
    if (replies) {
      const newReplies = replies.map((reply, index: number) => {
        if (reply.text) {
          return <ChatReply type="bot" key={`reply-${reply.text}`} first={!!replyIndexes.find((element) => element === index) || index === 0}>{reply.text}</ChatReply>;
        }
        if (reply.qs) {
          const quickSuggestItems = reply.qs.map(((quickSuggest) => ({ payload: quickSuggest.payload, text: quickSuggest.text })));
          return <ChatQuickSuggest key={`quick-sugguset-${quickSuggestItems[0].text}`} items={quickSuggestItems} handleQuickSuggest={handleQuickSuggest} />;
        }
        return null;
      });
      setReplyComponents(newReplies);
      setReplyIndexes((prevState) => {
        if (!replyIndexes.find((el) => el === replies.length)) {
          return [...prevState, replies?.length];
        }
        return [...prevState];
      });
    }
  }, [replies, handleQuickSuggest]);

  useEffect(() => {
    if (chatBoxRef && chatBoxRef.current) {
      (chatBoxRef.current as HTMLElement).scrollTop = (chatBoxRef.current as HTMLElement).scrollHeight;
    }
  }, [replyComponents]);

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
                className="mr-xs flex-1 textarea--expand"
                placeholder={textAreaPlaceholder}
                rows={1}
                data-rs-textarea="expand"
                data-rs-chat-textarea=""
                ref={textAreaRef}
                onKeyDown={handleSendOnEnterPress}
              />
              <button type="button" className="button button--icon button--filled" data-rs-chat-button="" onClick={() => handleSendButton()}>
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
                <button type="button" className="button button--s mr-xxs" data-rs-chat-tags-deselect-button="" aria-hidden="true">{deselectButtonText}</button>
                <button type="button" className="button button--s button--filled" data-rs-chat-tags-submit-button="" aria-hidden="true">{submitButtonText}</button>
              </div>
            </div>
          </div>
          {/*
              Some of the following markup doesn't have appropriate content.
              This is because settings is not supported for now.
           */}
          <div className="chat-settings" data-rs-chat-settings="">
            <div className="chat__header divider divider--is-hidden transition duration-200" data-rs-chat-header="">
              <button type="button" className="button--icon-only flex pr-xs" data-rs-chat-settings-button="" aria-label="">
                <Icon iconType="arrow-left" iconClassName="icon icon--inline text-brand-primary fill-current" />
              </button>
              <span
                className=" chat-settings__title text-title-xs text-brand-secondary flex-grow ml-xxs "
              />
            </div>
            <div className="chat__box pt-xxs" data-rs-chat-box="settings">
              <div className="form-group divider mb-m pb-xs">
                <label className="form-group__label" htmlFor="language-selector" />
                <div className="form-group__input mb-xs">
                  {/* This markup is present because orbit expects it to be. */}
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <select
                    id="language-selector"
                    required
                    data-rs-untouched=""
                    data-rs-chat-language-selector=""
                  />
                  <Icon iconType="chevron-down" iconClassName="select-arrow icon" />
                </div>
                <div
                  className="notice-in-page notice-in-page--warning mb-xs display-none"
                  data-rs-chat-language-notification=""
                >
                  <Icon iconType="warning" iconClassName="icon icon--inline" />
                  <span className="notice-in-page__body-copy" />
                </div>
                {/* This markup is present because orbit expects it to be. */}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  type="button"
                  className="button button--full-width button--filled mb-xs mt-xs mb-m"
                  disabled
                  data-rs-chat-language-save-button=""
                />
              </div>
              <div className="display-block mb-xs flex items-center">
                {/* This markup is present because orbit expects it to be. */}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
                <a href="#?" />
              </div>
              <div className="display-block mb-xs flex items-center">
                {/* This markup is present because orbit expects it to be. */}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */}
                <a href="#?" data-rs-chat-popup-show="" />
              </div>
            </div>
            <div className="chat-settings__overlay" data-rs-chat-popup="">
              <div className="chat-settings__overlay-content">
                {/* This markup is present because orbit expects it to be. */}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button type="button" className="button button--full-width button--filled mb-xs mtmb-m" />
                {/* This markup is present because orbit expects it to be. */}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button type="button" className="button button--full-width button--plain" data-rs-chat-popup-hide="" />
              </div>
            </div>
          </div>
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
