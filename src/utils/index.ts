// Export utils and their types that you will use outside the library here.
// For internal use, import the utils and their types from their own file location.
import { LocalStorageSavedJob, LocalStorageSavedJobs, Job } from './savedJobsHandler/savedJobsHandler.types';
import * as savedJobsHandler from './savedJobsHandler';
import FormatFileSize from './formatFileSize';
import * as resumeHandler from './resumeHandler';
import { AlreadyUploadedFile } from './resumeHandler/resumeHandler.types';
import getUserData from './getUserData';
import getSavedJobsLocalStorage from './savedJobsLocalStorage/getSavedJobsLocalStorage';
import removeSavedJobsFromLocalStorage from './savedJobsLocalStorage/removeSavedJobsLocalStorage';
import saveSavedJobsToLocalStorage from './savedJobsLocalStorage/saveSavedJobsLocalStorage';

export {
  savedJobsHandler,
  FormatFileSize,
  resumeHandler,
  getUserData,
  getSavedJobsLocalStorage,
  removeSavedJobsFromLocalStorage,
  saveSavedJobsToLocalStorage,
};

export type { AlreadyUploadedFile, LocalStorageSavedJob, LocalStorageSavedJobs, Job };
