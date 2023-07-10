import { AxiosResponse } from 'axios';
import { Data, TalentAppApi } from '../talentAppApi';
import getUserData from '../getUserData';
import { SavedJobsResponse } from './savedJobsHandler.types';
import searchByJobId from '../searchApi/searchByJobId';

const getSavedJobsCount = async (gdsApiKey: string, gdsApiUrl: string, checkLocalStorage = true): Promise<number> => {
  const userData = getUserData();
  // TODO: This needs to work with anonymous users as well. Handle it when unblocked for anonymous users.
  const savedJobs = localStorage.getItem('saved-jobs');
  // Anon user
  if (checkLocalStorage && savedJobs && !userData.savedJobs.totalElements) {
    const data = JSON.parse(savedJobs);
    if (data.totalElements) {
      return data.totalElements;
    }
    // logged in
  } else if (checkLocalStorage && userData.savedJobs) {
    return userData.savedJobs.totalElements;
    // After login, calls api
  } else if (userData.loginStatus) {
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

const handleAnonymousSavedJobs = async (searchApiUrl: string, searchApiKey: string, jobId: string) => {
  await searchByJobId(searchApiUrl, searchApiKey, jobId);
};

export { getSavedJobsCount, postSavedJobs, deleteSavedJobs, handleAnonymousSavedJobs };
