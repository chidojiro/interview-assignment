import React from 'react';
import { ShowMoreToggleInterface } from './ShowMoreToggle.types';

function ShowMoreToggle({
  items, handleClick, translations, isViewAllOpen, maxItemsShown = 3,
}: ShowMoreToggleInterface) {
  if (!items || !items.length || items.length <= maxItemsShown) return null;

  return (
    <div className="text-center mt-m">
      <a
        href="#?"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        aria-label={translations.viewAll}
        className="view-more-button"
      >
        {!isViewAllOpen
          ? translations.viewAll : translations.viewLess }
      </a>
    </div>
  );
}

export default ShowMoreToggle;
