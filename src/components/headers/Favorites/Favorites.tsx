import React from 'react';
import Icon from '../../Icon';

interface FavoritesProps {
  favoriteUrl?: string;
  maxCounter?: number;
  ariaLabel?: string;
}

function Favorites({ favoriteUrl, maxCounter, ariaLabel }: FavoritesProps) {
  return (
    <li className="navigation__service-item">
      <a href={favoriteUrl} className="navigation__service-link" aria-label={ariaLabel}>
        {maxCounter === 0 ? <Icon iconType="heart" iconClassName="icon icon--inline" /> : <Icon iconType="heart-filled" iconClassName="icon icon--inline" />}
        <span className="favorites__counter" id="maxCounter">
          {maxCounter}
        </span>
      </a>
    </li>
  );
}

export default Favorites;
