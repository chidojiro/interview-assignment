import React from 'react';
import { ActionNoticeProps } from './ActionNotice.types';
import Button from '../../buttons/Button';

function ActionNotice({
  background,
  primaryButtonText,
  onPrimaryButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick,
  buttonsReversed = true,
  children,
}: ActionNoticeProps) {
  return (
    <div className={`block bg-variant-brand-${background} notice-action`}>
      <div className="wrapper notice-action__wrapper">
        <div className="notice-action__text">
          {children}
        </div>
        <div className={`button-group ${buttonsReversed ? 'button-group--reverse-on-l' : ''}`}>
          <Button href="#" handleClick={onPrimaryButtonClick}>
            {primaryButtonText}
          </Button>
          <Button href="#" variant="plain" handleClick={onSecondaryButtonClick}>
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ActionNotice;
