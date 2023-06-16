import React from 'react';
import { ShowMoreToggleInterface } from './ShowMoreToggle.types';

function ShowMoreToggle({
  items, handleClick, translations, isViewAllOpen, maxItemsShown = 3,
}: ShowMoreToggleInterface) {
  if (!items || !items.length || items.length <= maxItemsShown) return null;

  return (
    // Anchor tag uses orbit for styling.
    // eslint-disable-next-line jsx-a11y/anchor-is-valid,react/react-in-jsx-scope
    <div className="text-center mt-m">
      {/* Anchor tag uses orbit for styling. */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/react-in-jsx-scope */}
      <a
        href="#"
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
