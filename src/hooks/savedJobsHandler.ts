import { AxiosResponse } from 'axios';
import { TalentAppApi } from './talentAppApi';

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

const getSavedJobsCount = async (gdsApiKey: string, gdsApiUrl: string): Promise<number | undefined> => {
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

  return undefined;
};

const saveCountOfSavedJobs = async (gdsApiKey: string, gdsApiUrl: string) => {
  const numberOfSavedJobs: SavedJobsResponse = {
    totalElements: (await getSavedJobsCount(gdsApiKey, gdsApiUrl)) ?? 0,
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

const getSavedJobsNumber = async (gdsApiKey: string, gdsApiUrl: string, localStorage: any) => {
  if (localStorage) {
    const data = JSON.parse(localStorage as string);
    if (data.totalElements) {
      return data.totalElements;
    }
  } else {
    return getSavedJobsCount(gdsApiKey, gdsApiUrl).catch((err) => {
      // Needed logging for error.
      // eslint-disable-next-line no-console
      console.error('getSavedJobsCount Error: ', err);
      return undefined;
    });
  }
  return undefined;
};

const deleteSavedJobs = async (gdsApiKey: string, gdsApiUrl: string, savedJobId: string): Promise<AxiosResponse> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);

  return talentApi.delete(`/me/saved-jobs/${savedJobId}`).then((res: AxiosResponse) => {
    saveCountOfSavedJobs(gdsApiKey, gdsApiUrl);
    return res;
  });
};

export { getSavedJobsNumber, getSavedJobsCount, postSavedJobs, deleteSavedJobs };
