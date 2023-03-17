import React from 'react';
import Icon from '../Icon';

export interface settingsFields {
  checked: boolean;
  icon?: string;
  iconAttributes?: object;
}

export interface fourthOptionSettingsField {
  field: "client_name_settings" | "hours_settings" | "education_settings" | "duration_settings" | "division_settings" | "sector_settings";
  icon?: "building" | "clock" | "education" | "calendar" | "factory";
  ariaLabel: string;
}

export interface JobItemMetadataProps {
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
    location: settingsFields
    jobType: settingsFields;
    salary: settingsFields;
    fourthOption?: fourthOptionSettingsField
  }
  lowerCased?: string;
}

const JobItemMetadata: React.FC<JobItemMetadataProps> = ({metaDataFields, settings, lowerCased = false}) => {
  const fourthOptionIcon = settings.fourthOption?.icon
  const fourthOptionAriaLabel = {"aria-label": settings?.fourthOption?.ariaLabel};

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

  switch (settings.fourthOption?.field) {
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
         (settings?.location.checked && metaDataFields?.location) ?
          <li className="cards__meta-item" data-testid="location-testId">
            <span className="icon icon--inline">
              <Icon svgProps={settings?.location.iconAttributes || {}} iconType={settings?.location.icon ? settings?.location.icon : "marker"} iconClassName={null}/>
            </span>
            { lowerCased ? metaDataFields.location.toLowerCase() : metaDataFields.location }
          </li> : null
      }
      {
        (settings?.jobType.checked && metaDataFields.jobType) ?
          <li className="cards__meta-item">
            <span className="icon icon--inline">
              <Icon svgProps={settings.jobType.iconAttributes || {}} iconType={settings.jobType.icon ? settings.jobType.icon : "briefcase"} iconClassName={null}/>
            </span>
            { lowerCased ? metaDataFields.jobType.toLowerCase() : metaDataFields.jobType }
          </li> : null
      }
      {
         (settings?.salary?.checked && metaDataFields.salary) ?
          <li className={`cards__meta-item`}>
            <span className="icon icon--inline">
              <Icon svgProps={settings.salary.iconAttributes || {}} iconType={settings.salary.icon ? settings.salary.icon : "salary"} iconClassName={null}/>
            </span>
            { metaDataFields.salary }
          </li> : null
      }
      {fourthMetaCardOption}
    </ul>
  );
}

export default JobItemMetadata;
