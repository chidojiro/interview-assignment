import { AxiosResponse } from 'axios';
import { TalentAppApi } from './talentAppApi';

export interface SavedJobs {
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

// Function that checks if the current logged in user has an already uplaoded file.
const getSavedJobs = async (gdsApiKey: string, gdsApiUrl: string): Promise<number | undefined> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl);

  const response = await talentApi.get<Data, AxiosResponse<SavedJobs>>('/me/saved-jobs?size=1').catch((err) => {
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

const getSavedJobsCount = async (gdsApiKey: string, gdsApiUrl: string, localStorage: any) => {
  if (localStorage) {
    const data = JSON.parse(localStorage as string);
    if (data.totalElements) {
      return data.totalElements;
    }
  } else {
    return getSavedJobs(gdsApiKey, gdsApiUrl).catch((err) => {
      // Needed logging for error.
      // eslint-disable-next-line no-console
      console.error('getSavedJobsCount Error: ', err);
      return undefined;
    });
  }
  return undefined;
};

export { getSavedJobs, getSavedJobsCount };
