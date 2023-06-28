import React, { useCallback } from 'react';
import classNames from 'classnames';
import Icon from '../../common/Icon';
import { CloseEvents, TextNoticeProps } from './TextNotice.types';

function TextNotice({
  children,
  background,
  backgroundClass = 'bg-variant-brand',
  icon,
  ariaLabelClose = 'close',
  onClose,
}: TextNoticeProps) {
  const textNoticeClose = useCallback(
    (event: CloseEvents) => {
      event.preventDefault();
      event.stopPropagation();
      setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, 200);
    },
    [onClose],
  );

  return (
    <div className={`block ${backgroundClass}-${background} notice-text-only ${onClose ? 'notice-text-only__closable' : ''}`}>
      <div className="wrapper notice-text-only__wrapper">
        <div className="notice-text-only__content body-copy">
          {onClose && (
            <div className="notice-text-only__close" data-rs-closable-fadeout="">
              <button
                className="button--icon-only"
                aria-label={ariaLabelClose}
                tabIndex={0}
                onClick={(event: CloseEvents) => textNoticeClose(event)}
                type="button"
              >
                <Icon iconClassName={classNames('icon icon--inline hidden--from-l icon--alternative')} iconType="close" />
                <Icon iconClassName={classNames('icon icon--l icon--inline hidden--until-l icon--alternative')} iconType="close-30" />
              </button>
            </div>
          )}
          <div className="notice-text-only__description" data-rs-closable-fadeout="">
            {icon && <Icon iconClassName="icon icon--inline icon--static" iconType={icon} />}
            <div className="description">
              <p>
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextNotice;
