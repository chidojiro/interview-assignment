import { LocalStorageSavedJobs } from '../../savedJobsHandler/savedJobsHandler.types';

export const saveSavedJobsLocalStorage = (savedJobs: LocalStorageSavedJobs) => {
  localStorage.setItem('saved-jobs', JSON.stringify(savedJobs));

  const event = new Event('saved-jobs');
  window.top?.dispatchEvent(event);
};

export default saveSavedJobsLocalStorage;
