import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export type TextNoticeBackground = 'tint-7' | 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary';

interface TextNoticeProps {
  children: string | JSX.Element | (string | JSX.Element)[];
  background: TextNoticeBackground;
  icon?: string;
  ariaLabelClose?: string;
  onClose: () => void;
}

function TextNotice({
  children,
  background,
  icon = 'check-16',
  ariaLabelClose = 'close',
  onClose,
}: TextNoticeProps) {

  return (
    <>
      <div className={`block bg-variant-brand-${background} notice-text-only notice-text-only__closable`}>
        <div className="wrapper notice-text-only__wrapper">
          <div className="notice-text-only__content body-copy">
            <div className="notice-text-only__close" data-rs-closable-fadeout="">
              <button
                className="button--icon-only"
                aria-label={ariaLabelClose}
                tabIndex={0}
                onClick={onClose}
              >
                <Icon iconClassName={classNames('icon icon--inline hidden--from-l icon--alternative')} iconType="close" />
                <Icon iconClassName={classNames('icon icon--l icon--inline hidden--until-l icon--alternative')} iconType="close-30" />
              </button>
            </div>
            <div className="notice-text-only__description" data-rs-closable-fadeout="">
              <Icon iconClassName="icon icon--inline icon--static" iconType={icon} />
              <div className="description">
                <p>
                  {children}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { TextNotice };
