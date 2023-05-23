import React from 'react';
import SummaryCardProps from './SummaryCard.props';

function SummaryCard({
  title,
  emptyMessage,
  message,
  count,
  tabIndex = 0,
  onClick,
}: SummaryCardProps) {
  return (
    <div className="dashboard-card cards__item p-s l:py-s l:px-m">
      <div className="dashboard-card--top mb-xxs">
        {/* This is anchor is not really used but Orbit requires it because it has applied styles */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="link cards__link" tabIndex={tabIndex}>
          {title}
          <span
            role="button"
            tabIndex={0}
            aria-label="make entire card clickable"
            className="make-entire-card-clickable"
            onClick={(e) => onClick(e)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                return onClick(e);
              }
              return null;
            }}
          />
        </a>
      </div>
      <div className="dashboard-card--middle l:my-xs">{count}</div>
      <div className="dashboard-card--bottom mt-xxs text-brand-secondary-tint-60">
        {!count ? emptyMessage : message}
      </div>
    </div>
  );
}

export default SummaryCard;
