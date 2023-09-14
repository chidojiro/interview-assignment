export type RXPJob = {
  payRates: RXPJobPayRates | null;
  clientDetail: RXPJobClient | null;
  id: string;
  jobTitle: string;
  description: { description: string };
  jobInformation: RXPJobInformation;
  postingDetail: RXPJobPostingDetail;
  workLocationAddress: RXPJobAddress;
};

export type RXPJobClient = {
  name: string | null;
}

export type RXPJobPayRates = {
  currencyCode: string;
  currencySymbol?: string;
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
  administrativeArea?: string;
};
