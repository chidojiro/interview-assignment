import React from 'react';
import cn from 'classnames';
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
        <div className={cn('button-group', { 'button-group--reverse-on-l': buttonsReversed })}>
          {primaryButtonText && (
            <Button handleClick={onPrimaryButtonClick}>
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && (
            <Button variant="plain" handleClick={onSecondaryButtonClick}>
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActionNotice;
