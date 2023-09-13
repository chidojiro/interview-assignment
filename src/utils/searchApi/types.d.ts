export type RXPJob = {
  payRates: RXPJobPayRates;
  clientDetail: RXPJobClient;
  id: string;
  jobTitle: string;
  description: { description: string };
  jobInformation: RXPJobInformation;
  postingDetail: RXPJobPostingDetail;
  workLocationAddress: RXPJobAddress;
};

export type RXPJobClient = {
  name: string;
}

export type RXPJobPayRates = {
  currencyCode: string;
  currencySymbol: string;
  salaryMax: number;
  salaryMin: number;
  unit: string;
  unitDisplay: string;
}

export type RXPJobInformation = {
  jobType: string;
};

export type RXPJobPostingDetail = {
  postingTime: string;
};

export type RXPJobAddress = {
  locality: string;
  administrativeArea: string;
};
