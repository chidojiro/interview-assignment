import React from 'react';
import { QuickLinkCardProps } from './QuickLinkCard.types';
import '../../../assets/scss/quick-links.scss';
import Icon from '../../common/Icon';

function QuickLinkCard({
  title,
  description,
  url,
  tabIndex = 0,
  onClick,
  clickAreaAriaLabel = 'make entire card clickable',
}: QuickLinkCardProps) {
  return (
    <div className="dashboard-card cards__item p-s l:py-s l:px-m">
      <div className="dashboard-card--top mb-xxs flex justify-between items-start">
        {/* This is anchor is not used but Orbit requires it because it has applied styles */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href={url} className="link cards__link text-brand-primary" tabIndex={tabIndex} target="_blank">
          {title}
          {url && (
            <span
              role="button"
              tabIndex={0}
              aria-label={clickAreaAriaLabel}
              className="make-entire-card-clickable"
              onClick={onClick}
              onKeyDown={(e) => {
                if (typeof onClick === 'function' && e.key === 'Enter') {
                  return onClick(e);
                }
                return null;
              }}
            />
          )}
        </a>
        <Icon iconType="external" iconClassName="icon icon--inline flex-shrink-0 ml-xs mt-xxs" />
      </div>
      {/* Safe here */}
      {/* eslint-disable-next-line react/no-danger */}
      {description && <div className="dashboard-card--bottom mt-xxs text-brand-secondary-tint-60" dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
}

export default QuickLinkCard;
