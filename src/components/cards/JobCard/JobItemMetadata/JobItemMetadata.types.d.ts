// Empty string added because sometimes the data coming from the metadata service is empty.
export type MetaItemIcons = 'marker' | 'briefcase' | 'salary' | '';
export type FourthOptionFieldValues =
  | 'client_name_settings'
  | 'hours_settings'
  | 'education_settings'
  | 'duration_settings'
  | 'division_settings'
  | 'sector_settings';
export type FourthOptionIconType = 'building' | 'clock' | 'education' | 'calendar' | 'factory';

interface TrackAndTraceData {
  title: string;
  status?: string;
}

export interface JobItemMetadataProps {
  location: string;
  salary?: string;
  clientName?: string;
  workHours?: string;
  education?: string;
  duration?: string;
  division?: string;
  sector?: string;
  jobType: string;

  locationIcon?: MetaItemIcons;
  salaryIcon?: MetaItemIcons;
  jobTypeIcon?: MetaItemIcons;

  locationIconAttributes?: object;
  salaryIconAttributes?: object;
  jobTypeIconAttributes?: object;

  enableLocation?: boolean;
  enableSalary?: boolean;
  enableJobType?: boolean;

  fourthOptionField?: FourthOptionFieldValues;
  fourthOptionIcon?: FourthOptionIconType;
  fourthOptionAriaLabelValue?: string;

  lowerCased?: boolean;
  evergreenJobIcon?: string;
  evergreenJobText?: string;

  trackAndTraceData?: TrackAndTraceData;
}
