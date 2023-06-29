import React from 'react';
import { SummaryCardProps } from './SummaryCard.types';

function SummaryCard({
  title,
  emptyMessage,
  message,
  count,
  tabIndex = 0,
  onClick,
  stars,
  clickAreaAriaLabel = 'make entire card clickable',
}: SummaryCardProps) {
  return (
    <div className={`dashboard-card cards__item p-s l:py-s l:px-m ${stars ? 'col-span-full l:col-span-1' : ''}`}>
      <div className="dashboard-card--top mb-xxs">
        {/* This is anchor is not used but Orbit requires it because it has applied styles */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="link cards__link" tabIndex={tabIndex}>
          {title}
          {typeof onClick === 'function' && (
            <span
              role="button"
              tabIndex={0}
              aria-label={clickAreaAriaLabel}
              className="make-entire-card-clickable"
              onClick={onClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  return onClick(e);
                }
                return null;
              }}
            />
          )}
        </a>
      </div>
      {/* If the stars boolean is true, show stars progress instead of counter. */}
      {stars ? (
        <div className="dashboard-card--middle l:my-xs rating-readonly rating--l">
          <div className="rating-readonly__icon--wrapper">
            <div className="icon--filled" style={{ width: `${count * 10}%` }} />
            {!count ? emptyMessage : message}
          </div>
        </div>
      ) : <div className="dashboard-card--middle l:my-xs">{count}</div>}

      <div className="dashboard-card--bottom mt-xxs text-brand-secondary-tint-60">
        {!count ? emptyMessage : message}
      </div>
    </div>
  );
}

export default SummaryCard;
