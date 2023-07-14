// Export utils and their types that you will use outside the library here.
// For internal use, import the utils and their types from their own file location.
import { LocalStorageSavedJob, LocalStorageSavedJobs, Job } from './savedJobsHandler/savedJobsHandler.types';
import * as savedJobsHandler from './savedJobsHandler';
import FormatFileSize from './formatFileSize';
import * as resumeHandler from './resumeHandler';
import { AlreadyUploadedFile } from './resumeHandler/resumeHandler.types';
import getUserData from './getUserData';

export { savedJobsHandler, FormatFileSize, resumeHandler, getUserData };

export type { AlreadyUploadedFile, LocalStorageSavedJob, LocalStorageSavedJobs, Job };
