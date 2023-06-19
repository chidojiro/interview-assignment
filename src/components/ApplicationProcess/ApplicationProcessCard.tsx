import React from 'react';
import cn from 'classnames';
import { ApplicationProcessCardProp } from './ApplicationProcessCard.types';

function ApplicationProcessCard({
  cardTitle,
  cardDescription,
  cardImage,
  accessibilityItemNumber,
  cardColor,
  badgeColor,
  itemNumber,
}: ApplicationProcessCardProp) {
  return (
    <li className="blog-overview__item">
      <div className="banner" data-rs-carousel-image="data-rs-carousel-image">
        <div className={cn('banner__wrapper', `${cardColor}`)}>
          <div className="banner__media media-block">
            <img src={cardImage} alt={accessibilityItemNumber} />
          </div>
          <div className="banner__content content-block">
            <span aria-hidden="true" className={cn('badge badge--l', `${badgeColor}`)}>
              {itemNumber}
            </span>
            <h3 className="content-block__title">{cardTitle}</h3>
            <p className="content-block__description">{cardDescription}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ApplicationProcessCard;
