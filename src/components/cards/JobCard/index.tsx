import React, {
  useEffect, useRef, useState, SyntheticEvent,
} from 'react';
import { Card } from '@ffw/randstad-local-orbit/js/components/card';
import cn from 'classnames';
import { JobCardProps } from './JobCard.types';
import Icon from '../../common/Icon';
import JobItemMetadata from './JobItemMetadata';
import SavedJobIcon from './SavedJobIcon';
import Notice from '../../notifications/Notice';

function JobCard(props: JobCardProps) {
  const {
    hasBackground = false,
    url,
    onMouseDownClick,
    title,
    description,
    date,
    id,
    enableLogo = false,
    logoAltTagValue = '',
    logoSrcTagValue = '',
    activeView = 'grid',
    closeText,
    closeIconAriaLabel,
    infoIconAriaLabel,
    viewJobText,
    savedJobsEnabled,
    savedJobIconAriaLabel = 'saved job icon',
    disabled = false,
    notice = null,
    opcoCodes,
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
    <li
      className={cn('cards__item ', {
        'bg-variant-white': !hasBackground,
        'cards__item--disabled': disabled,
      })}
      data-rs-card
      data-rs-carousel-card
      ref={cardRef}
    >
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
          { notice && notice.children && notice.type && (
            <Notice type={notice.type}>{notice.children}</Notice>
          )}
        </div>
        {savedJobsEnabled && (
          <SavedJobIcon
            searchApiKey={savedJobsEnabled.searchApiKey}
            searchApiUrl={savedJobsEnabled.searchApiUrl}
            gdsApiKey={savedJobsEnabled.gdsApiKey}
            gdsApiUrl={savedJobsEnabled.gdsApiUrl}
            shareIdTokenAcrossSubdomains={savedJobsEnabled.shareIdTokenAcrossSubdomains}
            jobPostingWebDetailId={savedJobsEnabled.jobPostingWebDetailId}
            savedJobId={savedJobsEnabled.savedJobId}
            ariaLabel={savedJobIconAriaLabel}
            returnJobPostingDetails={savedJobsEnabled.returnJobPostingDetails}
            locale={savedJobsEnabled.locale}
            title={title}
            anonymousSavedLimit={savedJobsEnabled.anonymousSavedLimit}
            opcoCodes={opcoCodes}
          />
        )}
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
        <div className="cards__info-wrapper" tabIndex={0} data-rs-card-show-backside role="button" aria-label={infoIconAriaLabel}>
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
            {viewJobText}
          </a>
          <div
            className="cards__backside-footer--horizontal cards__backside-footer--close-backside"
            data-rs-card-hide-backside=""
            tabIndex={-1}
            role="button"
            aria-label={closeIconAriaLabel}
          >
            <Icon iconType="close" iconClassName="icon icon--inline" />
            <span className="button-text">{closeText}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default JobCard;
