import { PersistData } from './types';
import { getCookie } from 'cookies-next';

function getUserData(): PersistData {
  const refreshToken = getCookie('RefreshToken');
  const accessToken = getCookie('AccessToken');

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
  if (!refreshToken || !accessToken) {
    if (data?.currentUser && data?.loginStatus) {
      const {currentUser, savedJobs} = data;
      loginStatus = data.loginStatus;
      return {currentUser, loginStatus, savedJobs};
    }

    return { loginStatus, savedJobs: data.savedJobs };
  }

  if (data && data !== '{}') {
    localStorage.removeItem('userState');
  }
  return {
    loginStatus: false,
    savedJobs: {
      totalElements: 0,
    },
  };
}

export default getUserData;
