// INFO: This component went under restructuring, but it needs ESLint fixes and optimization.
import React from 'react';
import Icon from '../../../common/Icon';
import { JobItemMetadataProps } from './JobItemMetadata.types';

function JobItemMetadata({
  location,
  salary,
  clientName,
  workHours,
  education,
  duration,
  division,
  sector,
  jobType,
  locationIcon,
  salaryIcon,
  jobTypeIcon,
  enableLocation = true,
  enableSalary = false,
  enableJobType = true,
  locationIconAttributes,
  salaryIconAttributes,
  jobTypeIconAttributes,
  fourthOptionField,
  fourthOptionIcon,
  fourthOptionAriaLabelValue,
  lowerCased = false,
}: JobItemMetadataProps) {
  const fourthOptionAriaLabel = { 'aria-label': fourthOptionAriaLabelValue };

  const fieldValue = (value: string) => (lowerCased ? value.toLowerCase() : value);

  const ClientName = () => {
    if (!clientName) return null;
    return (
      <li className="cards__meta-item" data-testid="fourth-option-client-name-id">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon || 'building'} iconClassName={null} />
        </span>
        {fieldValue(clientName)}
      </li>
    );
  };

  const WorkHours = () => {
    if (!workHours) return null;
    return (
      <li className="cards__meta-item" data-testid="work-hours">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon || 'clock'} iconClassName={null} />
        </span>
        {fieldValue(workHours)}
      </li>
    );
  };

  const Education = () => {
    if (!education) return null;

    return (
      <li className="cards__meta-item" data-testid="fourth-option-education-id">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon || 'education'} iconClassName={null} />
        </span>
        {fieldValue(education)}
      </li>
    );
  };

  const Duration = () => {
    if (!duration) return null;

    return (
      <li className="cards__meta-item" data-testid="duration">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon || 'calendar'} iconClassName={null} />
        </span>
        {fieldValue(duration)}
      </li>
    );
  };

  const Division = () => {
    if (!division) return null;

    return (
      <li className="cards__meta-item" data-testid="division">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon || 'building'} iconClassName={null} />
        </span>
        {fieldValue(division)}
      </li>
    );
  };

  const Sector = () => {
    if (!sector) return null;
    return (
      <li className="cards__meta-item" data-testid="sector">
        <span className="icon icon--inline">
          <Icon svgProps={fourthOptionAriaLabel} iconType={fourthOptionIcon || 'factory'} iconClassName={null} />
        </span>
        {fieldValue(sector)}
      </li>
    );
  };

  const fourthMetaCardOptions = {
    client_name_settings: ClientName,
    hours_settings: WorkHours,
    education_settings: Education,
    duration_settings: Duration,
    division_settings: Division,
    sector_settings: Sector,
  };

  const FourthMetaCardOption = fourthOptionField ? fourthMetaCardOptions[fourthOptionField] : null;

  const FourthOptionMetaComponent = () => {
    if (!FourthMetaCardOption) return null;
    return <FourthMetaCardOption />;
  };

  return (
    <ul className="cards__meta">
      {
        (enableLocation && location)
        && (
          <li className="cards__meta-item" data-testid="location-testId">
            <span className="icon icon--inline">
              <Icon svgProps={locationIconAttributes || {}} iconType={locationIcon || 'marker'} iconClassName={null} />
            </span>
            {fieldValue(location)}
          </li>
        )
      }
      {
        (enableJobType && jobType)
        && (
          <li className="cards__meta-item" data-testid="job-type">
            <span className="icon icon--inline">
              <Icon svgProps={jobTypeIconAttributes || {}} iconType={jobTypeIcon || 'briefcase'} iconClassName={null} />
            </span>
            {fieldValue(jobType)}
          </li>
        )
      }
      {
        (enableSalary && salary)
        && (
          <li className="cards__meta-item" data-testid="salary">
            <span className="icon icon--inline">
              <Icon svgProps={salaryIconAttributes || {}} iconType={salaryIcon || 'salary'} iconClassName={null} />
            </span>
            {fieldValue(salary)}
          </li>
        )
      }

      <FourthOptionMetaComponent />

    </ul>
  );
}

export default JobItemMetadata;
