type PersonalInfo = {
  familyName: string;
  givenName: string;
  preferredName: string | undefined;
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
    totalElements: number,
  };
};

function getUserData(): PersistData {
  if (typeof window === 'undefined') {
    return {
      loginStatus: false,
      savedJobs: {
        totalElements: 0,
      },
    };
  }
  const data = JSON.parse(localStorage.getItem('userState') || '{}');

  let loginStatus = false;
  if (data?.currentUser && data?.loginStatus) {
    const { currentUser, savedJobs } = data;
    loginStatus = data.loginStatus;
    return { currentUser, loginStatus, savedJobs };
  }

  return { loginStatus, savedJobs: data.savedJobs };
}

export default getUserData;
