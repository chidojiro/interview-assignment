import React from 'react';
import Icon from '../../common/Icon';

function ChatSettings() {
  return (
    <div className="chat-settings" data-rs-chat-settings="">
      {/*
              Some of the following markup doesn't have appropriate content.
              This is because settings is not supported for now.
           */}
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
  );
}

export default ChatSettings;
