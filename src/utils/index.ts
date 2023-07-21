// Export utils and their types that you will use outside the library here.
// For internal use, import the utils and their types from their own file location.
import { LocalStorageSavedJob, LocalStorageSavedJobs, Job } from './savedJobs/savedJobsHandler/savedJobsHandler.types';
import * as savedJobsHandler from './savedJobs/savedJobsHandler';
import FormatFileSize from './formatFileSize';
import * as resumeHandler from './resumeHandler';
import { AlreadyUploadedFile } from './resumeHandler/resumeHandler.types';
import getUserData from './getUserData';
import getSavedJobsLocalStorage from './savedJobs/savedJobsLocalStorage/getSavedJobsLocalStorage';
import removeSavedJobsFromLocalStorage from './savedJobs/savedJobsLocalStorage/removeSavedJobsLocalStorage';
import saveSavedJobsToLocalStorage from './savedJobs/savedJobsLocalStorage/saveSavedJobsLocalStorage';
import getSavedJobs from './savedJobs/getSavedJobs';

export {
  savedJobsHandler,
  FormatFileSize,
  resumeHandler,
  getUserData,
  getSavedJobsLocalStorage,
  removeSavedJobsFromLocalStorage,
  saveSavedJobsToLocalStorage,
  getSavedJobs,
};

export type { AlreadyUploadedFile, LocalStorageSavedJob, LocalStorageSavedJobs, Job };
