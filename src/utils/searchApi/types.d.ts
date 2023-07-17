export type RXPJob = {
  id: string;
  jobTitle: string;
  description: { description: string };
  jobInformation: RXPJobInformation;
  postingDetail: RXPJobPostingDetail;
  workLocationAddress: RXPJobAddress;
};

export type RXPJobInformation = {
  jobType: string;
};

export type RXPJobPostingDetail = {
  postingTime: string;
};

export type RXPJobAddress = {
  locality: string;
};
