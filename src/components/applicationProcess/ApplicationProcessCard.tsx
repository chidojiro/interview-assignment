import React from "react";

interface ApplicationProcessCardProp {
  index: number,
  cardTitle: string,
  cardDescription: string,
  cardImage: string,
  accessibilityItemNumber: string,
  cardColor: string,
  badgeColor: string,
  itemNumber: string,
}


const ApplicationProcessCard = ({
  index,
  cardTitle,
  cardDescription,
  cardImage,
  accessibilityItemNumber,
  cardColor, badgeColor,
  itemNumber
}: ApplicationProcessCardProp) => {

  return (
    <li key={index} className="blog-overview__item">
      <div className="banner" data-rs-carousel-image="data-rs-carousel-image">
        <div className={`banner__wrapper ${cardColor}`}>
          <div className="banner__media media-block">
            <img src={`/jobs-app/src/assets/img/application-process/${cardImage}.svg`} alt={accessibilityItemNumber}/>
          </div>
          <div className="banner__content content-block">
            <span aria-hidden="true" className={`badge badge--l ${badgeColor}`}>
              {itemNumber}
            </span>
            <h3 className="content-block__title">{cardTitle}</h3>
            <p className="content-block__description">{cardDescription}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ApplicationProcessCard;