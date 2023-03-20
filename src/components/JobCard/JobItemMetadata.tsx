import React from 'react';
import Icon from '../Icon';

export type metaItemIcons = "marker" | "briefcase" | "salary";

export interface JobItemMetadataProps {
  location: string;
  salary: string;
  clientName?: string;
  workHours?: string;
  education?: string;
  duration?: string;
  divison?: string;
  sector?: string;
  jobType: string;

  locationIcon?: metaItemIcons;
  salaryIcon?: metaItemIcons;
  jobTypeIcon?: metaItemIcons;

  locationIconAttributes?: object;
  salaryIconAttributes?: object;
  jobTypeIconAttributes?: object;

  enableLocation: boolean;
  enableSalary: boolean;
  enableJobType: boolean;

  fourthOptionField?: "client_name_settings" | "hours_settings" | "education_settings" | "duration_settings" | "division_settings" | "sector_settings";
  fourthOptionIcon?: "building" | "clock" | "education" | "calendar" | "factory";
  fourthOptionAriaLabelValue?: string;

  lowerCased?: string;
}

const JobItemMetadata: React.FC<JobItemMetadataProps> = ({
  location, salary, clientName, workHours, education, duration, divison, sector, jobType,
  locationIcon, salaryIcon, jobTypeIcon,
  enableLocation, enableSalary, enableJobType,
  locationIconAttributes, salaryIconAttributes, jobTypeIconAttributes,
  fourthOptionField, fourthOptionIcon, fourthOptionAriaLabelValue,
  lowerCased = false
}) => {

  const fourthOptionAriaLabel = { "aria-label": fourthOptionAriaLabelValue };

  const fieldValue = (value: string) => {
    return lowerCased ? value.toLowerCase() : value;
  }

  const ClientName = () => {
    if (!clientName) return null;
    return (
      <li className="cards__meta-item" data-testid="fourth-option-client-name-id">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "building"} iconClassName={null} />
        </span>
        {fieldValue(clientName)}
      </li>
    )
  }

  const WorkHours = () => {
    if (!workHours) return null;
    return (
      <li className="cards__meta-item">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "clock"} iconClassName={null} />
        </span>
        {fieldValue(workHours)}
      </li>
    )
  }

  const Education = () => {
    if (!education) return null;

    return (
      <li className="cards__meta-item" data-testid="fourth-option-education-id">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "education"} iconClassName={null} />
        </span>
        {fieldValue(education)}
      </li>
    )
  }

  const Duration = () => {
    if (!duration) return null;

    return (
      <li className="cards__meta-item">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "calendar"} iconClassName={null} />
        </span>
        {fieldValue(duration)}
      </li>
    )
  }

  const Division = () => {
    if (!divison) return null;

    return (
      <li className="cards__meta-item">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "building"} iconClassName={null} />
        </span>
        {fieldValue(divison)}
      </li>
    )
  }

  const Sector = () => {
    if (!sector) return null;
    return (
      <li className="cards__meta-item">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon ? fourthOptionIcon : "factory"} iconClassName={null} />
        </span>
        {fieldValue(sector)}
      </li>
    )
  }

  const fourthMetaCardOptions = {
    client_name_settings: ClientName,
    hours_settings: WorkHours,
    education_settings: Education,
    duration_settings: Duration,
    division_settings: Division,
    sector_settings: Sector
  }

  let FourthMetaCardOption = fourthOptionField ? fourthMetaCardOptions[fourthOptionField] : null;

  const FourthOptionMetaComponent = () => {
    if (!FourthMetaCardOption) return null;
    return <FourthMetaCardOption />
  }

  return (
    <ul className="cards__meta">
      {
        (enableLocation && location) &&
        <li className="cards__meta-item" data-testid="location-testId">
          <span className="icon icon--inline">
            <Icon svgProps={locationIconAttributes || {}} iconType={locationIcon ? locationIcon : "marker"} iconClassName={null} />
          </span>
          {fieldValue(location)}
        </li>
      }
      {
        (enableJobType && jobType) &&
        <li className="cards__meta-item">
          <span className="icon icon--inline">
            <Icon svgProps={jobTypeIconAttributes || {}} iconType={jobTypeIcon ? jobTypeIcon : "briefcase"} iconClassName={null} />
          </span>
          {fieldValue(jobType)}
        </li>
      }
      {
        (enableSalary && salary) &&
        <li className={`cards__meta-item`}>
          <span className="icon icon--inline">
            <Icon svgProps={salaryIconAttributes || {}} iconType={salaryIcon ? salaryIcon : "salary"} iconClassName={null} />
          </span>
          {fieldValue(salary)}
        </li>
      }

      <FourthOptionMetaComponent />

    </ul>
  );
}

export default JobItemMetadata;
