import React from 'react';
import cn from 'classnames';
import Icon from '../../common/Icon';
import { NoticeProps } from './Notice.types';

function Notice({
  children, type = 'informative', icon, className,
}: NoticeProps) {
  let noticeIcon;

  switch (type) {
    case 'negative':
      noticeIcon = 'warning';
      break;
    case 'informative':
      noticeIcon = 'info';
      break;
    case 'positive':
      noticeIcon = 'check';
      break;
    case 'warning':
      noticeIcon = 'warning';
      break;
    case 'subtle':
      noticeIcon = 'face-sad';
      break;
    default:
      noticeIcon = 'info';
  }

  return (
    <div className={cn(`notice-in-page notice-in-page--${type}`, className)}>
      <Icon iconClassName="icon icon--inline icon--static" iconType={icon || noticeIcon || 'info'} />
      <span className="notice-in-page__body-copy body-copy">{children}</span>
    </div>
  );
}

export default Notice;
