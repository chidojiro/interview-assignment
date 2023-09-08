import { AxiosResponse } from 'axios';
import getUserData from '../../getUserData';
import getSavedJobsLocalStorage from '../savedJobsLocalStorage/getSavedJobsLocalStorage';
import queryBuilder from '../../queryBuilder';
import TalentApi from '../../talentAppApi';
import { SavedJobsResponse } from './types';

async function getSavedJobs(
  queryParams: {
    size: string | number,
    [key: string]: number | string;
  },
  gdsApiKey: string,
  gdsApiUrl: string,
  shareIdTokenAcrossSubdomains: boolean,
): Promise<SavedJobsResponse> {
  const { loginStatus } = getUserData();
  // If the user is not logged in, we will take the saved-jobs form the localstorage.
  // Otherwise, we will assume that we have api access, and we will try to get the saved-jobs from the talent app api.
  if (!loginStatus) {
    const localSavedJobs = getSavedJobsLocalStorage();
    // If we can't find the localstorage key, or the localstorage does not contain content or totalElements,
    // we will return an empty state. Else we will return the actual jobs stored in the localstorage.
    if (!localSavedJobs || !localSavedJobs.content || !localSavedJobs.totalElements) {
      return {
        content: [],
        totalElements: 0,
        pageSize: 20,
        pageNumber: 1,
      };
    }
    return {
      content: localSavedJobs.content as [],
      totalElements: localSavedJobs.totalElements,
      pageSize: 20,
      pageNumber: 1,
    };
  }
  let finalQuery = queryBuilder(queryParams);

  const talentAppApi = new TalentApi(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains);

  return talentAppApi
    .get(`me/saved-jobs?${finalQuery}`)
    .then((response: AxiosResponse) => response.data)
    .catch((reason) => {
      // Log the error.
      // eslint-disable-next-line no-console
      console.error(reason);
      throw reason;
    });
}

export default getSavedJobs;
