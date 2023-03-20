import React, { useRef, useEffect } from 'react';
import Icon from '../Icon';
import JobItemMetadata from './JobItemMetadata';
import { JobItemMetadataProps } from './JobItemMetadata';

interface JobCardProps extends JobItemMetadataProps{
  title: string;
  description: string;
  id: string;
  url: string;
  date: string;
  logo: JSX.Element;
  hasBackground: boolean;
  activeView: "grid" | "list";
  viewJobText: string;
  closeText: string;
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
  date,
  logo,
  hasBackground,
  activeView,
  viewJobText,
  closeText,
  favoriteIcon,
  infoIcon,
  closeIcon,
  infoIconClick,
  onMouseDownClick,
  location,
  salary,
  clientName,
  workHours,
  education,
  duration,
  divison,
  sector,
  jobType,
  locationIcon,
  salaryIcon,
  jobTypeIcon,
  locationIconAttributes,
  salaryIconAttributes,
  jobTypeIconAttributes,
  enableLocation,
  enableSalary,
  enableJobType,
  fourthOptionField,
  fourthOptionIcon,
  fourthOptionAriaLabelValue,
  lowerCased
}) => {

  const cardRef = useRef<any>(null);

  useEffect(() => {
    if (cardRef.current?.classList.contains('cards__item--backside-active')) {
      cardRef.current?.querySelector('[data-rs-card-hide-backside]')?.click();
    }
  }, [activeView]);

  return (
    <li className={`cards__item ${hasBackground ? '' : 'bg-variant-white'}`} data-rs-card={true} ref={cardRef}>
      <div className="cards__header">
        <div className="cards__logo-title-container">
          { logo }
          <h3 className="cards__title">
            <a href={url} tabIndex={0} className="cards__link" onMouseDown={onMouseDownClick}>
              {title}
              <span className="make-entire-card-clickable"/>
            </a>
          </h3>
        </div>
        {favoriteIcon}
      </div>
      <JobItemMetadata location={location} salary={salary} clientName={clientName} workHours={workHours} education={education} duration={duration} divison={divison} sector={sector} jobType={jobType} locationIcon={locationIcon} salaryIcon={salaryIcon} jobTypeIcon={jobTypeIcon} locationIconAttributes={locationIconAttributes} salaryIconAttributes={salaryIconAttributes} jobTypeIconAttributes={jobTypeIconAttributes} enableLocation={enableLocation} enableSalary={enableSalary} enableJobType={enableJobType} fourthOptionField={fourthOptionField} fourthOptionIcon={fourthOptionIcon} fourthOptionAriaLabelValue={fourthOptionAriaLabelValue} lowerCased={lowerCased}/>
      <div className="cards__description" dangerouslySetInnerHTML={{ __html: description }} />
      <div className="cards__footer">
        <div className="cards__time-info">
          <span className="cards__date text--alternative">
            {date}
          </span>
        </div>
        <div className="cards__info-wrapper" tabIndex={0} data-rs-card-show-backside={true} {...infoIcon}>
          <span className="cards__info-button text--alternative" onClick={infoIconClick}>
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
            data-jobid={id} onMouseDown={onMouseDownClick}
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