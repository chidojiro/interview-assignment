import { LocalStorageSavedJobs } from '../../savedJobsHandler/savedJobsHandler.types';

const getSavedJobsLocalStorage = (): LocalStorageSavedJobs | undefined =>
  JSON.parse(localStorage.getItem('saved-jobs') as string) as LocalStorageSavedJobs;

export default getSavedJobsLocalStorage;
