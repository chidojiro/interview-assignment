import { getCookie } from 'cookies-next';
import { PersistData } from './types';

/**
 * Gets the userData and populates if from the localstorage, if logged in.
 *
 * If we need to know the user's status (outside my-randstad app) - call this function, as it handled the logged out state properly.
 */
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

  // If the tokens are missing we won't check the localstorage, we will return the default state.
  if (!refreshToken && !idToken) {
    return defaultData;
  }

  const data = JSON.parse(localStorage.getItem('userState') || '{}');
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
