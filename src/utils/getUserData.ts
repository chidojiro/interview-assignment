type PersonalInfo = {
  familyName: string;
  givenName: string;
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
};

function getUserData(): PersistData {
  if (typeof window === 'undefined') {
    return {
      loginStatus: false,
    };
  }
  const data = JSON.parse(localStorage.getItem('persist:root') || '{}');

  let loginStatus = false;
  if (data?.currentUser && data?.loginStatus && data?.loginStatus === 'true') {
    const currentUser = JSON.parse(data.currentUser);
    if (data.loginStatus === 'true') {
      loginStatus = true;
    }
    return { currentUser, loginStatus };
  }

  return { loginStatus };
}

export default getUserData;
