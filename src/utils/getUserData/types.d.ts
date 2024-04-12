type PersonalInfo = {
  familyName: string;
  givenName: string;
  preferredName: string | undefined;
  isEmployee?: boolean;
};

type CurrentUser = {
  contactInfo: { emailAddress: string };
  createdDate: string;
  id: string;
  languageCode: string;
  modifiedDate: string;
  personalInfo: PersonalInfo;
};

export type PersistData = {
  currentUser?: CurrentUser;
  loginStatus: boolean;
  savedJobs: {
    totalElements: number;
  };
  disagreed?: boolean;
  isIdTokenValidated?: boolean;
};
