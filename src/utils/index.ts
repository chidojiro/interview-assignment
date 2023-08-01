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
import postInitChat from './chatApi/postInitChat';
import { ContinueRequestType } from './chatApi/postContinueConversation/types';
import { ConversationReply, ConversationQuickSuggest } from './chatApi/types';
import postContinueConversation from './chatApi/postContinueConversation';
import { gtmScriptInitializer, gtmDataLayerPushHandler } from './gtm';
import type { DataLayerEventObjectType } from './gtm/types';

export {
  savedJobsHandler,
  FormatFileSize,
  resumeHandler,
  getUserData,
  getSavedJobsLocalStorage,
  removeSavedJobsFromLocalStorage,
  saveSavedJobsToLocalStorage,
  getSavedJobs,
  gtmScriptInitializer,
  gtmDataLayerPushHandler,
  postInitChat,
  postContinueConversation,
  ContinueRequestType,
};

export type {
  AlreadyUploadedFile,
  LocalStorageSavedJob,
  LocalStorageSavedJobs,
  Job,
  DataLayerEventObjectType,
  ConversationReply,
  ConversationQuickSuggest,
};
