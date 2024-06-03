// INFO: This component went under restructuring, but it needs ESLint fixes and optimization.
import React from 'react';
import { JobItemMetadataProps } from './JobItemMetadata.types';
import MetaCardOption from './MetaCardOption';

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
  evergreenJobText,
  evergreenJobIcon,
  trackAndTraceData,
}: JobItemMetadataProps) {
  const fieldValue = (value: string) => (lowerCased ? value.toLowerCase() : value);

  const renderClientName = () => {
    if (!clientName) return null;
    return (
      <MetaCardOption
        dataTestId="fourth-option-client-name-id"
        iconType={fourthOptionIcon || 'building'}
        fieldValue={fieldValue(clientName)}
        svgProps={{ 'aria-label': fourthOptionAriaLabelValue }}
      />
    );
  };

  const renderWorkHours = () => {
    if (!workHours) return null;
    return (
      <MetaCardOption
        dataTestId="work-hours"
        iconType={fourthOptionIcon || 'clock'}
        fieldValue={fieldValue(workHours)}
        svgProps={{ 'aria-label': fourthOptionAriaLabelValue }}
      />
    );
  };

  const renderEducation = () => {
    if (!education) return null;
    return (
      <MetaCardOption
        dataTestId="fourth-option-education-id"
        iconType={fourthOptionIcon || 'education'}
        fieldValue={fieldValue(education)}
        svgProps={{ 'aria-label': fourthOptionAriaLabelValue }}
      />
    );
  };

  const renderDuration = () => {
    if (!duration) return null;
    return (
      <MetaCardOption
        dataTestId="duration"
        iconType={fourthOptionIcon || 'calendar'}
        fieldValue={fieldValue(duration)}
        svgProps={{ 'aria-label': fourthOptionAriaLabelValue }}
      />
    );
  };

  const renderDivision = () => {
    if (!division) return null;
    return (
      <MetaCardOption
        dataTestId="division"
        iconType={fourthOptionIcon || 'building'}
        fieldValue={fieldValue(division)}
        svgProps={{ 'aria-label': fourthOptionAriaLabelValue }}
      />
    );
  };

  const renderSector = () => {
    if (!sector) return null;
    return (
      <MetaCardOption
        dataTestId="sector"
        iconType={fourthOptionIcon || 'factory'}
        fieldValue={fieldValue(sector)}
        svgProps={{ 'aria-label': fourthOptionAriaLabelValue }}
      />
    );
  };

  const fourthMetaCardOptions = {
    client_name_settings: renderClientName,
    hours_settings: renderWorkHours,
    education_settings: renderEducation,
    duration_settings: renderDuration,
    division_settings: renderDivision,
    sector_settings: renderSector,
  };

  const renderFourthMetaCardOption = () => {
    if (!fourthOptionField) return null;
    return fourthMetaCardOptions[fourthOptionField]();
  };

  return (
    <ul className="cards__meta">
      {
        (evergreenJobText)
        && (
          <MetaCardOption
            dataTestId="evergreen"
            iconType={evergreenJobIcon || 'label'}
            fieldValue={fieldValue(evergreenJobText)}
            svgProps={{}}
          />
        )
      }
      {
        (enableLocation && location)
        && (
          <MetaCardOption
            dataTestId="location-testId"
            iconType={locationIcon || 'marker'}
            fieldValue={fieldValue(location)}
            svgProps={locationIconAttributes || {}}
          />
        )
      }
      {
        (enableJobType && jobType)
        && (
          <MetaCardOption
            dataTestId="job-type"
            iconType={jobTypeIcon || 'briefcase'}
            fieldValue={fieldValue(jobType)}
            svgProps={jobTypeIconAttributes || {}}
          />
        )
      }
      {
        (enableSalary && salary)
        && (
          <MetaCardOption
            dataTestId="salary"
            iconType={salaryIcon || 'salary'}
            fieldValue={fieldValue(salary)}
            svgProps={salaryIconAttributes || {}}
          />
        )
      }
      {renderFourthMetaCardOption()}
      {trackAndTraceData && trackAndTraceData.status && (
        <div className="mt-xs mb-s">
          <div>{ trackAndTraceData.title }</div>
          <div className="text-brand-primary">{ trackAndTraceData.status }</div>
        </div>
      )}
    </ul>
  );
}

export default JobItemMetadata;
