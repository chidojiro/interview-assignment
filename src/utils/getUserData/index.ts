import { getCookie } from 'cookies-next';
import { PersistData } from './types';

function getUserData(): PersistData {
  const refreshToken = getCookie('RefreshToken');
  const idToken = getCookie('IdToken');
  const defaultData = {
    isIdTokenValidated: undefined,
    loginStatus: false,
    savedJobs: {
      totalElements: 0,
    },
    disagreed: undefined,
  };

  if (typeof window === 'undefined') {
    return defaultData;
  }

  const data = JSON.parse(localStorage.getItem('userState') || '{}');

  // logged out because of a missing token.
  if (!refreshToken && !idToken) {
    // keep localStorage if in register process.
    if (!data?.currentUser?.contactInfo?.emailAddress) {
      localStorage.removeItem('userState');
    }
    return defaultData;
  }

  const loginStatus = (data?.currentUser && data?.loginStatus) ? data.loginStatus : false;

  const userData: PersistData = {
    loginStatus,
    savedJobs: data.savedJobs,
  };

  if (loginStatus) {
    userData.currentUser = data.currentUser;
    userData.disagreed = data.disagreed;
    userData.isIdTokenValidated = data.isIdTokenValidated;
  }

  return userData;
}

export default getUserData;
