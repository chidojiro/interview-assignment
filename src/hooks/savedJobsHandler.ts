import { AxiosResponse } from 'axios';
import { TalentAppApi } from './talentAppApi';
import getUserData from '../utils/getUserData';

interface SavedJobsResponse {
  totalElements: number;
}

export type Data = {
  // Data describes a generic abstract structure of request, which can be anything.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  data: {
    content: Array<object>;
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    numberOfElements: number;
    empty: boolean;
  };
};

const getSavedJobsCount = async (gdsApiKey: string, gdsApiUrl: string, checkLocalStorage = true): Promise<number> => {
  const isLoggedIn = getUserData();
  // TODO: This needs to work with anonymous users as well. Handle it when unblocked for anonymous users.
  const savedJobs = localStorage.getItem('saved-jobs');
  // Anon user
  if (checkLocalStorage && savedJobs && !isLoggedIn.savedJobs.totalElements) {
    const data = JSON.parse(savedJobs);
    if (data.totalElements) {
      return data.totalElements;
    }
    // logged in
  } else if (checkLocalStorage && isLoggedIn.savedJobs) {
    return isLoggedIn.savedJobs.totalElements;
    // After login, calls api
  } else if (isLoggedIn.loginStatus) {
    const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);
    const response = await talentApi.get<Data, AxiosResponse<SavedJobsResponse>>('/me/saved-jobs?size=1').catch((err) => {
      // Needed logging for error.
      // eslint-disable-next-line no-console
      console.error('GetSavedJobs Error: ', err);
      return undefined;
    });
    if (response) {
      return response.data.totalElements;
    }
  }

  return 0;
};

const saveCountOfSavedJobs = async (gdsApiKey: string, gdsApiUrl: string) => {
  const numberOfSavedJobs: SavedJobsResponse = {
    totalElements: await getSavedJobsCount(gdsApiKey, gdsApiUrl, false),
  };
  const userData = getUserData();
  if (userData.loginStatus) {
    userData.savedJobs.totalElements = numberOfSavedJobs.totalElements;
    await localStorage.setItem('userState', JSON.stringify(userData));
  }
  const savedJobsEvent = new Event('saved-jobs');
  window.dispatchEvent(savedJobsEvent);
};

const postSavedJobs = async (gdsApiKey: string, gdsApiUrl: string, jobPostingWebDetailId: string): Promise<void> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);

  await talentApi.post('/me/saved-jobs', { jobPostingWebDetailId }).then((res: AxiosResponse) => {
    saveCountOfSavedJobs(gdsApiKey, gdsApiUrl);
    return res.data;
  });
};

const deleteSavedJobs = async (gdsApiKey: string, gdsApiUrl: string, savedJobId: string): Promise<AxiosResponse> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);

  return talentApi.delete(`/me/saved-jobs/${savedJobId}`).then((res: AxiosResponse) => {
    saveCountOfSavedJobs(gdsApiKey, gdsApiUrl);
    return res;
  });
};

export { getSavedJobsCount, postSavedJobs, deleteSavedJobs };
