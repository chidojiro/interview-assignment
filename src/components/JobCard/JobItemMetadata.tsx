import React from 'react';
import Icon from '../Icon';

interface JobItemMetadataProps {
  metaDataFields: {
    location: string;
    salary: string;
    clientName: string;
    workHours: string;
    education: string;
    duration: string;
    divison: string;
    sector: string;
    jobType: string;
  };
  settings: {
    card_settings: any;
    job_cards_tab: any;
    fourthOptionAriaLabel: object;
  }
  lowerCased?: string;
}

const JobItemMetadata: React.FC<JobItemMetadataProps> = ({metaDataFields, settings, lowerCased = false}) => {
  const { card_settings, job_cards_tab } = settings;
  const fourthOptionIcon = job_cards_tab?.job_card_setting?.icon?.display;
  const fourthOptionAriaLabel = {"aria-label": settings?.fourthOptionAriaLabel};

  let fourthMetaCardOption = null;

  const renderClientName = () => {
    if (!metaDataFields?.clientName) return;
    let clientName = lowerCased ? metaDataFields.clientName.toLowerCase() : metaDataFields.clientName
    return (
      <li className="cards__meta-item" data-testid="fourth-option-client-name-id">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "building"} iconClassName={null}/>
        </span>
        { clientName }
      </li>
    )
  }

  const renderWorkHours = () => {
    let workHours = lowerCased ? metaDataFields.workHours.toLowerCase() : metaDataFields.workHours;

    return (
      <li className="cards__meta-item">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "clock"} iconClassName={null}/>
        </span>
        {workHours}
      </li>
    )
  }

  const renderEducation = () => {
    if (!metaDataFields?.education) return;

    return (
      <li className="cards__meta-item" data-testid="fourth-option-education-id">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "education"} iconClassName={null}/>
        </span>
        { lowerCased ? metaDataFields.education.toLowerCase() : metaDataFields.education }
      </li>
    )
  }

  const renderDuration = () => {
    if (!metaDataFields?.duration) return;

    return (
      <li className="cards__meta-item">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "calendar"} iconClassName={null}/>
        </span>
        { lowerCased ? metaDataFields.duration.toLowerCase() : metaDataFields.education }
      </li>
    )
  }

  const renderDivision = () => {
    if (!metaDataFields?.divison) return;

    return (
      <li className="cards__meta-item">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "building"} iconClassName={null}/>
        </span>
        { lowerCased ? metaDataFields.divison.toLowerCase() : metaDataFields.divison }
      </li>
    )
  }

  const renderSector = () => {
    if (!metaDataFields?.sector) return;
    return (
      <li className="cards__meta-item">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "factory"} iconClassName={null}/>
        </span>
        { lowerCased ? metaDataFields.sector.toLowerCase() : metaDataFields.sector }
      </li>
    )
  }

  switch (job_cards_tab?.job_card_setting?.additional_meta_field?.display) {
    case 'client_name_settings':
      fourthMetaCardOption = renderClientName();
      break;
    case 'hours_settings':
      fourthMetaCardOption = renderWorkHours();
      break;
    case 'education_settings':
      fourthMetaCardOption = renderEducation();
      break;
    case 'duration_settings':
      fourthMetaCardOption = renderDuration();
      break;
    case 'division_settings':
      fourthMetaCardOption = renderDivision();
      break;
    case 'sector_settings':
      fourthMetaCardOption = renderSector();
      break;
    default:
      fourthMetaCardOption = null;
  }

  return(
    <ul className="cards__meta">
      {
         card_settings?.location_settings?.checked && metaDataFields.location ?
          <li className="cards__meta-item" data-testid="location-testId">
            <span className="icon icon--inline">
              <Icon svgProps={card_settings.location_settings.icon_attributes || {}} iconType={card_settings.location_settings.icon ? card_settings.location_settings.icon : "marker"} iconClassName={null}/>
            </span>
            { lowerCased ? metaDataFields.location.toLowerCase() : metaDataFields.location }
          </li> : null
      }
      {
        card_settings?.jobtype_settings?.checked && metaDataFields.jobType ?
          <li className="cards__meta-item">
            <span className="icon icon--inline">
              <Icon svgProps={card_settings.jobtype_settings.icon_attributes || {}} iconType={card_settings.jobtype_settings.icon ? card_settings.jobtype_settings.icon : "briefcase"} iconClassName={null}/>
            </span>
            { lowerCased ? metaDataFields.jobType.toLowerCase() : metaDataFields.jobType }
          </li> : null
      }
      {
         card_settings?.salary_settings?.checked && metaDataFields.salary ?
          <li className={`cards__meta-item`}>
            <span className="icon icon--inline">
              <Icon svgProps={card_settings.salary_settings.icon_attributes || {}} iconType={card_settings.salary_settings.icon ? card_settings.salary_settings.icon : "salary"} iconClassName={null}/>
            </span>
            { metaDataFields.salary }
          </li> : null
      }
      {fourthMetaCardOption}
    </ul>
  );
}

export default JobItemMetadata;
