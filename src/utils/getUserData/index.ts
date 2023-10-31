import { getCookie } from 'cookies-next';
import { PersistData } from './types';

function getUserData(): PersistData {
  const refreshToken = getCookie('RefreshToken');
  const idToken = getCookie('IdToken');
  const defaultData = {
    loginStatus: false,
    savedJobs: {
      totalElements: 0,
    },
  };

  if (typeof window === 'undefined') {
    return defaultData;
  }
  // logged out because of a missing token.
  if (!refreshToken || !idToken) {
    localStorage.removeItem('userState');
    return defaultData;
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
