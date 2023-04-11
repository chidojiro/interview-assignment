import React, { useState, useEffect } from 'react';
import { getFavorites } from '../../../hooks/favoritesHandler';
import Icon from '../../Icon';

interface FavoritesProps {
  gdsApiKey?: string;
  gdsApiUrl?: string;
  favoriteUrl?: string;
  ariaLabel?: string;
}

function Favorites({ favoriteUrl, gdsApiKey, gdsApiUrl, ariaLabel }: FavoritesProps) {
  const [maxCounter, setMaxCounter] = useState(0);
  useEffect(() => {
    const getAllFavorites = async () => {
      if (gdsApiKey && gdsApiUrl) {
        const allFavorites = await getFavorites(gdsApiKey, gdsApiUrl);
        if (allFavorites) {
          console.log(allFavorites);
          setMaxCounter(allFavorites.totalElements);
        }
      }
    };
    getAllFavorites();
  }, [gdsApiKey, gdsApiUrl]);
  return (
    <li className="navigation__service-item">
      <a href={favoriteUrl} className="navigation__service-link" aria-label={ariaLabel}>
        {maxCounter === 0 ? (
          <Icon iconType="heart" iconClassName="icon icon--inline" />
        ) : (
          <Icon iconType="heart-filled" iconClassName="icon icon--inline" />
        )}
        <span className="favorites__counter" id="maxCounter">
          {maxCounter}
        </span>
      </a>
    </li>
  );
}

export default Favorites;
