import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { RatingStarsProps, StarItem } from './RatingStars.types';
import Icon from '../../Icon';

export default function RatingStars({
  stars,
  value,
  name: propName,
  onChange,
  label,
  error,
}: RatingStarsProps): JSX.Element {
  const [starsItems, setStarsItems] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    if (stars?.length) {
      const starsItemsArray = [];
      if (!value) {
        // This default checked element is needed because orbit expect zero hidden star.
        starsItemsArray.push(
          <React.Fragment key={0}>
            <input value={0} id="star0-0" checked type="radio" name={propName} className="ratings__input no--visually" onChange={onChange} />
          </React.Fragment>,
        );
      }
      const starsArr = stars.map((star:StarItem) => star.id);
      const valueIndex = starsArr.findIndex((star: string) => star === value);
      for (const star of stars) {
        const { id, name } = star;
        const starIndex = starsArr.findIndex((starItem: string) => starItem === id);
        starsItemsArray.push(
          <React.Fragment key={id}>
            <input
              className="ratings__input no--visually"
              checked={starIndex === valueIndex}
              name={propName}
              type="radio"
              id={`star${id}`}
              value={id}
              onChange={onChange}
            />
            <label
              className="icon icon--inline"
              htmlFor={`star${id}`}
              aria-label={name}
            >
              <Icon iconType="star-filled-30" iconClassName="" />
            </label>
            <span className="ratings__description text--alternative">{name}</span>
          </React.Fragment>,
        );
      }

      setStarsItems(starsItemsArray);
    }
  }, [onChange, propName, stars, value]);

  return (
    <div className={cn('form-group form-group--input', {
      'form-group--error': error,
    })}
    >
      <div className="form__label">
        <span className="form-group__label">
          <span>{ label }</span>
        </span>
      </div>
      <div className="form-group__input">
        <div className="rating-dynamic">
          <div className="ratings" role="group" aria-label="ratings">
            <fieldset className="star-rating">
              <div>
                {starsItems}
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      {error ? (
        <div className="form-group__feedback">{error}</div>
      ) : null}
    </div>
  );
}
