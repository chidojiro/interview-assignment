import React, { useRef, useEffect } from 'react';
import Icon from '../Icon';

interface JobCardProps {
  title: string;
  description: string;
  id: string;
  url: string;
  meta: JSX.Element;
  date: string;
  logo: JSX.Element;
  settings: {
    background: boolean;
    active: "grid" | "list";
    viewJobText: string;
    closeText: string;
  }
  favoriteIcon: JSX.Element;
  infoIcon: object;
  closeIcon: object;
  infoIconClick: () => void;
  onMouseDownClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  id,
  url,
  meta,
  date,
  logo,
  settings,
  favoriteIcon,
  infoIcon,
  closeIcon,
  infoIconClick,
  onMouseDownClick
}) => {

  const cardRef = useRef<any>(null);
  const { active, background, viewJobText, closeText } = settings;

  useEffect(() => {
    if (cardRef.current?.classList.contains('cards__item--backside-active')) {
      cardRef.current?.querySelector('[data-rs-card-hide-backside]')?.click();
    }
  }, [active]);

  return (
    <li className={`cards__item ${background ? '' : 'bg-variant-white'}`} data-rs-card={true} ref={cardRef}>
      <div className="cards__header">
        <div className="cards__logo-title-container">
          {
            logo
          }
          <h3 className="cards__title">
            <a href={url} tabIndex={0} className="cards__link" onMouseDown={() => onMouseDownClick}>
              {title}
              <span className="make-entire-card-clickable"/>
            </a>
          </h3>
        </div>
        {favoriteIcon}
      </div>
      {meta}
      <div className="cards__description" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="cards__footer">
        <div className="cards__time-info">
          <span className="cards__date text--alternative">
            {date}
          </span>
        </div>
        <div className="cards__info-wrapper" tabIndex={0} data-rs-card-show-backside={true} {...infoIcon}>
          <span className="cards__info-button text--alternative" onClick={() => infoIconClick()}>
            <span className="icon icon--inline">
              <Icon iconType="info"/>
            </span>
          </span>
        </div>
      </div>
      <div className="cards__backside-card">
        <div className="cards__backside-description" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="cards__backside-footer">
          <a href={url}
            data-jobid={id} onMouseDown={() => onMouseDownClick}
            className="cards__backside-footer--horizontal cards__backside-footer--job-link" tabIndex={-1} aria-label="">
            <span className="icon icon--inline">
              <Icon iconType="eye"/>
            </span>
            {viewJobText}
          </a>
          <div data-rs-card-hide-backside=""
            className="cards__backside-footer--horizontal cards__backside-footer--close-backside" tabIndex={-1}
            role="button" {...closeIcon}>
            <span className="icon icon--inline">
              <Icon iconType="close"/>
            </span>
            <span className="button-text">{closeText}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default JobCard;