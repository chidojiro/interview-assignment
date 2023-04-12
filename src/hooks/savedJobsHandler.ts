import { AxiosResponse } from 'axios';
import { TalentAppApi } from './talentAppApi';

const postSavedJobs = async (gdsApiKey: string, gdsApiUrl: string, jobPostingWebDetailId: string): Promise<void> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);

  await talentApi.post('/me/saved-jobs', { jobPostingWebDetailId }).then((res: AxiosResponse) => res.data);
};

const deleteSavedJobs = async (gdsApiKey: string, gdsApiUrl: string, jobPostingWebDetailId: string): Promise<void> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);

  await talentApi.delete(`/me/saved-jobs/${jobPostingWebDetailId}`).then((res: AxiosResponse) => res.data);
};

export { postSavedJobs, deleteSavedJobs };
