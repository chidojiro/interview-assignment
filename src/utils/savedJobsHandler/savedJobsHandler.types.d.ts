export interface SavedJobsResponse {
  totalElements: number;
}

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  data: {
    content: Array<object>;
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    numberOfElements: number;
    empty: boolean;
  };
};

export type Job = {
  jobPosting: {
    jobDescription: string;
    jobTitle: string;
    workLocationAddresses: [
      {
        locality: string;
      },
    ];
    webDetail: {
      id: string;
    };
    employmentCategories: string[];
  };
};

export type LocalStorageSavedJob = {
  id: string;
  job: Job;
  createdDate: string;
};

export type LocalStorageSavedJobs = {
  content?: LocalStorageSavedJob[];
  totalElements?: number;
};
