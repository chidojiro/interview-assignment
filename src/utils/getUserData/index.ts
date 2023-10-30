import { getCookie } from 'cookies-next';
import { PersistData } from './types';

function getUserData(): PersistData {
  const refreshToken = getCookie('RefreshToken');
  const accessToken = getCookie('AccessToken');
  const defaultData = {
    loginStatus: false,
    savedJobs: {
      totalElements: 0,
    },
  };

  if (typeof window === 'undefined') {
    return defaultData;
  }
  const data = JSON.parse(localStorage.getItem('userState') || '{}');

  let loginStatus = false;
  if (!refreshToken || !accessToken) {
    if (data?.currentUser && data?.loginStatus) {
      const { currentUser, savedJobs } = data;
      loginStatus = data.loginStatus;
      return { currentUser, loginStatus, savedJobs };
    }

    return { loginStatus, savedJobs: data.savedJobs };
  }
  if (data || Object.keys(data).length === 0) {
    localStorage.removeItem('userState');
  }
  return defaultData;
}

export default getUserData;
