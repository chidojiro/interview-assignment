import Cookies from 'js-cookie';

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

type PersistData = {
  currentUser?: CurrentUser;
  loginStatus: boolean;
};

function getUserData(): PersistData {
  const persistData = localStorage.getItem('persist:root');
  let loginStatus = false;
  const idToken = Cookies.get('IdToken');
  const refreshToken = Cookies.get('RefreshToken');
  if (!idToken && !refreshToken) {
    localStorage.removeItem('persist:root');
    return { loginStatus };
  }

  const data = JSON.parse(persistData as string);
  const currentUser = JSON.parse(data.currentUser);
  if (data.loginStatus === 'true') {
    loginStatus = true;
  }
  return { currentUser, loginStatus };
}

export default getUserData;
