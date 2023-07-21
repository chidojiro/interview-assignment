export interface StagesInterface {
  stageType: string;
  status: string;
  startedDate: string;
}

export interface DerivedLocationInterface {
  latLng: {
    latitude: number;
    longitude: number;
  };
}

export interface WorkAddressesInterface {
  regionCode: string;
  postalCode: string;
  locality: string;
  addressLineOne: string;
  administrativeArea?: string;
  derivedLocation: DerivedLocationInterface;
}

export interface JobPostingInterface {
  jobTitle: string;
  jobDescription: string;
  webDetail: { id: string };
  workLocationAddresses: WorkAddressesInterface[];
}

export interface JobInterface {
  id: string;
  employmentCategories: string[];
  jobPosting: JobPostingInterface;
}

export interface JobsInterface {
  id: string;
  job: JobInterface;
  createdDate: string;
  stages?: StagesInterface[];
}

export interface SavedJobsResponse {
  content: JobsInterface[];
  totalElements: number;
  pageSize: number;
  pageNumber: number;
}
