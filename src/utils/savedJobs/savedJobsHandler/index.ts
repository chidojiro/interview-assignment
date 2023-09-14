import { AxiosResponse } from 'axios';
import { Data, TalentAppApi } from '../../talentAppApi';
import getUserData from '../../getUserData';
import { LocalStorageSavedJob, LocalStorageSavedJobs, SavedJobsResponse } from './savedJobsHandler.types';
import searchByJobId from '../../searchApi/searchByJobId';
import { RXPJob } from '../../searchApi/types';
import getSavedJobsLocalStorage from '../savedJobsLocalStorage/getSavedJobsLocalStorage';
import saveSavedJobsToLocalStorage from '../savedJobsLocalStorage/saveSavedJobsLocalStorage';

const savedJobsLocalStorageKey = 'saved-jobs';

const getSavedJobsCount = async (
  gdsApiKey: string,
  gdsApiUrl: string,
  shareIdTokenAcrossSubdomains: boolean,
  checkLocalStorage = true,
): Promise<number> => {
  const userData = getUserData();
  const savedJobs = getSavedJobsLocalStorage();
  // Anon user
  if (checkLocalStorage && !userData.loginStatus) {
    if (!savedJobs) {
      return 0;
    }
    if (savedJobs.totalElements) {
      return savedJobs.totalElements;
    }
    // logged in
  } else if (checkLocalStorage && userData.savedJobs && userData.savedJobs.totalElements) {
    return userData.savedJobs.totalElements;
    // After login, calls api
  } else if (userData.loginStatus) {
    const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains);
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

const saveCountOfSavedJobs = async (gdsApiKey: string, gdsApiUrl: string, shareIdTokenAcrossSubdomains: boolean) => {
  const numberOfSavedJobs: SavedJobsResponse = {
    totalElements: await getSavedJobsCount(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains, false),
  };
  const userData = getUserData();
  if (userData.loginStatus) {
    if (!userData.savedJobs) {
      userData.savedJobs = { totalElements: 0 };
    }
    userData.savedJobs.totalElements = numberOfSavedJobs.totalElements;
    await localStorage.setItem('userState', JSON.stringify(userData));
  }
  const savedJobsEvent = new Event(savedJobsLocalStorageKey);
  window.dispatchEvent(savedJobsEvent);
};

const postSavedJobs = async (
  gdsApiKey: string,
  gdsApiUrl: string,
  shareIdTokenAcrossSubdomains: boolean,
  jobPostingWebDetailId: string,
): Promise<void> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains);

  await talentApi.post('/me/saved-jobs', { jobPostingWebDetailId }).then((res: AxiosResponse) => {
    saveCountOfSavedJobs(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains);
    return res.data;
  });
};

const deleteSavedJobs = async (
  gdsApiKey: string,
  gdsApiUrl: string,
  shareIdTokenAcrossSubdomains: boolean,
  savedJobId: string,
): Promise<AxiosResponse> => {
  const talentApi = new TalentAppApi(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains);

  return talentApi.delete(`/me/saved-jobs/${savedJobId}`).then((res: AxiosResponse) => {
    saveCountOfSavedJobs(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains);
    return res;
  });
};

export const transferSavedJobStructure = (job: RXPJob): LocalStorageSavedJob => ({
  id: job.id,
  job: {
    jobPosting: {
      jobDescription: job.description.description,
      jobTitle: job.jobTitle,
      workLocationAddresses: [job.workLocationAddress],
      clientDetail: job.clientDetail,
      webDetail: {
        id: job.id,
      },
      employmentCategories: [job.jobInformation.jobType],
      payRates: job.payRates,
    },
  },
  createdDate: job.postingDetail.postingTime,
});

/**
 * This method will handle the functionality for the anonymous saved jobs heart icon.
 *
 * @param searchApiUrl
 *  The Search Api's url.
 * @param searchApiKey
 *  The Search Api's key.
 * @param jobId
 *  The jobId that we need to process.
 * @param locale
 *  The current locale of the app.
 *
 *  @returns boolean
 *    Used for if we need to fill the heart icon, or unfill it.
 *    true = we need to fill it.
 *    false = we need to unfill it.
 */
const handleAnonymousSavedJobs = async (searchApiUrl: string, searchApiKey: string, jobId: string, locale: string): Promise<boolean> => {
  let savedJobs: LocalStorageSavedJobs | undefined = getSavedJobsLocalStorage();
  if (savedJobs && savedJobs.content) {
    // Search if we have the job in the local storage.
    const found = savedJobs.content.findIndex((r) => r.id === jobId);
    // If we find it, then we must delete it.
    if (found !== -1) {
      savedJobs.content.splice(found, 1);
      if (!savedJobs.totalElements) {
        savedJobs.totalElements = 1;
      }

      savedJobs.totalElements -= 1;

      saveSavedJobsToLocalStorage(savedJobs);
      return false;
    }
  }

  if (!savedJobs) {
    savedJobs = {};
  }

  if (!savedJobs.content) {
    savedJobs.content = [];
  }

  if (!savedJobs.totalElements) {
    savedJobs.totalElements = 0;
  }

  // If we got here, then this means that we need to query the api for the job.
  const result = await searchByJobId(searchApiUrl, searchApiKey, jobId, locale);

  // If there is no result, this means that there is some kind of error. We return false, as we don't want to update anything.
  if (!result) {
    return false;
  }

  savedJobs.content.push(transferSavedJobStructure(result));
  savedJobs.totalElements += 1;

  saveSavedJobsToLocalStorage(savedJobs);

  return true;
};

export {
  getSavedJobsCount, postSavedJobs, deleteSavedJobs, handleAnonymousSavedJobs,
};
