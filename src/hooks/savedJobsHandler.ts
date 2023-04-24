import { AxiosResponse } from 'axios';
import { TalentAppApi } from './talentAppApi';

interface SavedJobsResponse {
  totalElements: number;
}

const getSavedJobs = async (gdsApiKey: string, gdsApiUrl: string): Promise<SavedJobsResponse> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);

  return talentApi.get('/me/saved-jobs?size=1').then((res: AxiosResponse) => res.data);
};

const saveCountOfSavedJobs = async (gdsApiKey: string, gdsApiUrl: string) => {
  const allSavedJobs: SavedJobsResponse = await getSavedJobs(gdsApiKey, gdsApiUrl);
  const numberOfSavedJobs: SavedJobsResponse = {
    totalElements: allSavedJobs.totalElements,
  };
  localStorage.setItem('saved-jobs', JSON.stringify(numberOfSavedJobs));
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

export { getSavedJobs, postSavedJobs, deleteSavedJobs };
