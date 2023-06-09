import React from 'react';
import { RatingProps } from './Rating.types';

/**
 * Rating provides a way for the user to rate something between 1-5. See [here](https://randstad.design/components/core/indicators/rating/)
 * @param description - The visible text next to the stars.
 * @param level - string-based level from which we get the actual rating number.
 * @param size - the size of the stars (s - 3, m - 4, l - 5).
 */
function Rating({ description, level, size }: RatingProps) {
  // Status is from 3 to 5 increments based on Orbit.
  let maxLevels: number;
  switch (size) {
    case 's':
      maxLevels = 3;
      break;
    case 'm':
      maxLevels = 4;
      break;
    case 'l':
      maxLevels = 5;
      break;
    default:
      maxLevels = 5;
      break;
  }
  const rating = level * (100 / maxLevels);

  return (
    <div className="rating__wrapper">
      <div className={`rating-readonly rating--${size}`}>
        <div className="rating-readonly__description">
          {description}
        </div>
        <div className="rating-readonly__icon--wrapper">
          <div className="icon--filled" style={{ width: `${rating}%` }} />
        </div>
      </div>
    </div>
  );
}

export default Rating;
