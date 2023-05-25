import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
// import styled from '@emotion/styled';
import { RadioStarsProps, StarItem } from './RadioStars.props';
/* import SvgIcon from '../../SvgIcon/SvgIcon';
import Preloader from '../../preloader/Preloader'; */

/**
 * Commented out due to dependency on @emotion/styled
 *  
const RatingStars = styled.div`
  height: auto;

  .star-rating:hover label svg {
    fill: #2175d9 !important;
  }
  
  .star-rating label:hover svg {
    fill: #2175d9 !important;
  }
  
  .star-rating label:hover ~ label svg {
    fill: #d7d7d7 !important;
  }
`;
*/

/**
 * Commented out due to dependency on @emotion/styled
 * 
const StarIcon = styled.label`
  .bg-variant-brand-tertiary .ratings &.icon {
    color: #d7d7d7;
  }
  
  .bg-variant-brand-tertiary .ratings &.icon.blue-star {
    color: #2175d9;
  }
  
  .bg-variant-brand-tertiary .ratings input:checked ~ &.icon {
    color: #d7d7d7;
  }
`;
*/
const RatingStars: FC<PropsWithChildren<JSX.IntrinsicElements['div']>> = ({children, ...props}) => <div {...props}>{children}</div>;
const StarIcon: FC<PropsWithChildren<JSX.IntrinsicElements['label']>> = ({children, ...props}) => <label {...props}>{children}</label>;

export default function RadioStars({
  stars,
  value,
  name: propName,
  onChange,
  label,
  error,
}: RadioStarsProps): JSX.Element {
  /* const [hasMounted, setHasMounted] = useState(false); */
  const [starsItems, setStarsItems] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (stars?.length) {
      const starsItemsArray = [];
      const starsArr = stars.map((star: StarItem) => star.id);
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
            <StarIcon
              className={`icon icon--inline ${starIndex <= valueIndex && 'blue-star'}`}
              htmlFor={`star${id}`}
              aria-label={name}
            >
              {/* <SvgIcon iconKey="star-filled" /> */}
            </StarIcon>
            <span className="ratings__description text--alternative">{name}</span>
          </React.Fragment>,
        );
      }

      setStarsItems(starsItemsArray);
    }
  }, [onChange, propName, stars, value]);

  useEffect(() => {
    /* if (stars?.length) {
      setHasMounted(true);
    } */
  }, [stars?.length, value]);

  /* if (!hasMounted) {
    return <Preloader />;
  } */

  return (
    <div className="form-group form-group--input ">
      <div className="form__label">
        <span className="form-group__label">
          <span>{ label }</span>
        </span>
      </div>
      <div className="form-group__input">
        <RatingStars className="rating-dynamic">
          <div className="ratings" role="group" aria-label="ratings">
            <fieldset className="star-rating">
              <div>
                {starsItems}
              </div>
            </fieldset>
          </div>
        </RatingStars>
      </div>
      {error ? (
        <div className="form-group__feedback error">{error}</div>
      ) : null}
    </div>
  );
}
