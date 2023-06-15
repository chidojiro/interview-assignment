import React from 'react';

export interface ShowMoreToggleInterface {
  items: unknown[] | [];
  handleClick: () => void;
  translations: {
    viewAll: string;
    viewLess: string;
  }
  isViewAllOpen: boolean;
  maxItemsShown?: number;
}

function ShowMoreToggle({
  items, handleClick, translations, isViewAllOpen, maxItemsShown = 3,
}: ShowMoreToggleInterface) {
  if (!items || !items.length || items.length <= maxItemsShown) return null;

  return (
    // Anchor tag uses orbit for styling.
    // eslint-disable-next-line jsx-a11y/anchor-is-valid,react/react-in-jsx-scope
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      aria-label={translations.viewAll}
      className="view-more-link mt-m"
    >
      {!isViewAllOpen
        ? translations.viewAll : translations.viewLess }
    </a>
  );
}

export default ShowMoreToggle;
