export type MetaItemIcons = 'marker' | 'briefcase' | 'salary' | '';

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

  fourthOptionField?:
    | 'client_name_settings'
    | 'hours_settings'
    | 'education_settings'
    | 'duration_settings'
    | 'division_settings'
    | 'sector_settings';
  fourthOptionIcon?: 'building' | 'clock' | 'education' | 'calendar' | 'factory';
  fourthOptionAriaLabelValue?: string;

  lowerCased?: boolean;
  evergreenJobIcon?: string;
  evergreenJobText?: string;
}
