import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import JobItemMetadata from './JobItemMetadata';
import { JobItemMetadataProps } from './JobItemMetadata';
import { Card } from '@ffw/randstad-local-orbit/js/components/card';

interface JobCardProps extends JobItemMetadataProps {
  title: string;
  description: string;
  id: string;
  url: string;
  date: string;
  enableLogo: boolean;
  hasBackground: boolean;
  activeView: "grid" | "list";
  viewJobText: string;
  closeText: string;
  enableFavoriteIcon: boolean;
  favoriteIcon?: JSX.Element;
  logoAltTagValue: string;
  logoSrcTagValue: string;
  infoIconAriaLabel: string;
  closeIconAriaLabel: string;
  onMouseDownClick: () => void;
}

const JobCard: React.FC<JobCardProps> = (props) => {

  const { hasBackground, url, onMouseDownClick, title, favoriteIcon, description, date, infoIconAriaLabel, id, viewJobText, closeIconAriaLabel, closeText, enableLogo, enableFavoriteIcon, logoAltTagValue, logoSrcTagValue, activeView } = props
  const [realLogoImg, setRealLogoImg] = useState(true);

  const logoRef = useRef<any>(null);
  const cardRef = useRef<HTMLLIElement | null>(null);

  const onLogoLoad = (event: any) => {
    if (event.target.naturalHeight <= 1) {
      logoRef.current.remove();
    } else {
      setRealLogoImg(event.target.naturalHeight > 1);
    }
  };

  useEffect(() => {
    if (cardRef.current) {
      new Card(cardRef.current)
    }
  }, []);

  console.log(cardRef.current);
  

useEffect(() => {
    if (cardRef?.current?.classList.contains('cards__item--backside-active')) {
        (cardRef?.current?.querySelector(('[data-rs-card-hide-backside]')) as HTMLLIElement)?.click();
    }
}, [activeView]);

  return (
    <li className={`cards__item ${hasBackground ? '' : 'bg-variant-white'}`} data-rs-card={true} ref={cardRef}>
      <div className="cards__header">
        <div className="cards__logo-title-container">
          {enableLogo && (
            <div className={`cards__logo${realLogoImg ? "" : " hidden--visually"}`} ref={logoRef}>
              <img className="cards__logo-image" alt={logoAltTagValue}
                src={logoSrcTagValue}
                onLoad={onLogoLoad} />
            </div>)
          }
          <h3 className="cards__title">
            <a href={url} tabIndex={0} className="cards__link" onMouseDown={onMouseDownClick}>
              {title}
              <span className="make-entire-card-clickable" />
            </a>
          </h3>
        </div>
        {enableFavoriteIcon && favoriteIcon}
      </div>
      <JobItemMetadata {...props} />
      <div className="cards__description" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="cards__footer">
        <div className="cards__time-info">
          <span className="cards__date text--alternative">
            {date}
          </span>
        </div>
        <div className="cards__info-wrapper" tabIndex={0} data-rs-card-show-backside={true} aria-label={infoIconAriaLabel}>
          <span className="cards__info-button text--alternative">
            <span className="icon icon--inline">
              <Icon iconType="info" />
            </span>
          </span>
        </div>
      </div>
      <div className="cards__backside-card">
        <div className="cards__backside-description" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="cards__backside-footer">
          <a href={url}
            data-jobid={id} onMouseDown={onMouseDownClick}
            className="cards__backside-footer--horizontal cards__backside-footer--job-link" tabIndex={-1} aria-label="">
            <span className="icon icon--inline">
              <Icon iconType="eye" />
            </span>
            {viewJobText}
          </a>
          <div className="cards__backside-footer--horizontal cards__backside-footer--close-backside" data-rs-card-hide-backside="" tabIndex={-1}
            role="button" aria-label={closeIconAriaLabel}>
            <span className="icon icon--inline" >
              <Icon iconType="close" />
            </span>
            <span className="button-text">{closeText}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default JobCard;