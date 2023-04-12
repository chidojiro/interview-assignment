import React, {
  useEffect, useRef, useState, SyntheticEvent,
} from 'react';
import { Card } from '@ffw/randstad-local-orbit/js/components/card';
import cn from 'classnames';
import Icon from '../Icon';
import JobItemMetadata, { JobItemMetadataProps } from './JobItemMetadata';
import FavoriteIcon from '../FavoriteIcon';

interface JobCardProps extends JobItemMetadataProps {
  title: string;
  description: string;
  id: string;
  url: string;
  date: string;
  enableLogo?: boolean;
  hasBackground?: boolean;
  activeView?: 'grid' | 'list';
  viewJobText: string;
  closeText: string;
  favoriteJobsEnabled?: boolean;
  favorited?: boolean;
  logoAltTagValue?: string;
  logoSrcTagValue?: string;
  infoIconAriaLabel?: string;
  closeIconAriaLabel?: string;
  gdsApiKey: string;
  gdsApiUrl: string;
  jobPostingWebDetailId: string;
  savedJobId: string;
  onMouseDownClick: () => void;
  translations: Translations
}

interface Translations {
  iconInfoAriaLabel: string,
  viewJobText: string,
  closeIconAriaLabel: string,
  closeText: string
}

const JobCard: React.FC<JobCardProps> = (props) => {
  const {
    hasBackground = false,
    url,
    onMouseDownClick,
    title,
    description,
    date,
    id,
    enableLogo = false,
    favoriteJobsEnabled = false,
    favorited = false,
    logoAltTagValue = '',
    logoSrcTagValue = '',
    activeView = 'grid',
<<<<<<< Updated upstream
    translations,
=======
    gdsApiKey,
    gdsApiUrl,
    jobPostingWebDetailId,
    savedJobId,
>>>>>>> Stashed changes
  } = props;
  const [realLogoImg, setRealLogoImg] = useState(true);

  const logoRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLLIElement | null>(null);

  const onLogoLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    if ((event?.target as HTMLImageElement)?.naturalHeight <= 1) {
      logoRef?.current?.remove();
    } else {
      setRealLogoImg((event.target as HTMLImageElement).naturalHeight > 1);
    }
  };

  useEffect(() => {
    if (cardRef.current) {
      new Card(cardRef.current);
    }
  }, []);

  useEffect(() => {
    if (cardRef?.current?.classList.contains('cards__item--backside-active')) {
      (cardRef?.current?.querySelector(('[data-rs-card-hide-backside]')) as HTMLLIElement)?.click();
    }
  }, [activeView]);

  return (
    <li className={`cards__item ${hasBackground ? '' : 'bg-variant-white'}`} data-rs-card data-rs-carousel-card ref={cardRef}>
      <div className="cards__header">
        <div className="cards__logo-title-container">
          {enableLogo && logoSrcTagValue?.length && (
            <div>
              <div className={`cards__logo ${realLogoImg ? '' : 'hidden--visually'}`} ref={logoRef}>
                <img
                  className="cards__logo-image"
                  alt={logoAltTagValue}
                  src={logoSrcTagValue}
                  onLoad={onLogoLoad}
                />
              </div>
            </div>
          )}
          <h3 className="cards__title">
            <a href={url} tabIndex={0} className="cards__link" onMouseDown={onMouseDownClick}>
              {title}
              <span className="make-entire-card-clickable" />
            </a>
          </h3>
        </div>
        {favoriteJobsEnabled && <FavoriteIcon id={id} favorite={favorited} gdsApiKey={gdsApiKey} gdsApiUrl={gdsApiUrl} jobPostingWebDetailId={jobPostingWebDetailId} savedJobId={savedJobId} />}
      </div>
      <JobItemMetadata {...props} />
      {/* Safe here. */}
      {/* eslint-disable-next-line react/no-danger */}
      <div className="cards__description" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="cards__footer">
        <div className="cards__time-info">
          <span className="cards__date text--alternative">
            {date}
          </span>
        </div>
        {/* Safe here. */}
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div className="cards__info-wrapper" tabIndex={0} data-rs-card-show-backside aria-label={translations.iconInfoAriaLabel}>
          <span className="cards__info-button text--alternative">
            <Icon iconType="info" iconClassName="icon icon--inline" />
          </span>
        </div>
      </div>
      <div className="cards__backside-card">
        {/* Safe here. */}
        {/* eslint-disable-next-line react/no-danger */}
        <div className="cards__backside-description" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="cards__backside-footer">
          <a
            href={url}
            data-jobid={id}
            onMouseDown={onMouseDownClick}
            className="cards__backside-footer--horizontal cards__backside-footer--job-link"
            tabIndex={-1}
            aria-label=""
          >
            <Icon iconType="eye" iconClassName="icon icon--inline" />
            {translations.viewJobText}
          </a>
          <div
            className="cards__backside-footer--horizontal cards__backside-footer--close-backside"
            data-rs-card-hide-backside=""
            tabIndex={-1}
            role="button"
            aria-label={translations.closeIconAriaLabel}
          >
            <Icon iconType="close" iconClassName="icon icon--inline" />
            <span className="button-text">{translations.closeText}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobCard;
