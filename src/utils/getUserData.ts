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
  savedJobsTotalElements: number;
};

function getUserData(): PersistData {
  if (typeof window === 'undefined') {
    return {
      loginStatus: false,
      savedJobsTotalElements: 0,
    };
  }
  const data = JSON.parse(localStorage.getItem('userState') || '{}');

  let loginStatus = false;
  if (data?.currentUser && data?.loginStatus) {
    const { currentUser, savedJobsTotalElements } = data;
    loginStatus = data.loginStatus;
    return { currentUser, loginStatus, savedJobsTotalElements };
  }

  return { loginStatus, savedJobsTotalElements: 0 };
}

export default getUserData;
