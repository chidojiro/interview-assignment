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
import { gtmScriptInitializer, gtmDataLayerPushHandler, gtmDataLayerEcommercePushHandler } from './gtm';
import getKeyCodeOnKeyDownEvent from './getKeyCodeOnKeyDownEvent';
import sendSplunkErrorBe from "./errors/splunkLogger/sendSplunkErrorBe";
import sendSplunkErrorFe from "./errors/splunkLogger/sendSplunkErrorFe";
import shouldLog from './errors/fnFormattedError/shouldLog';
import isFormattedError from './errors/fnFormattedError/isFormattedError';
import getStatusCodeFromError from './errors/fnFormattedError/getStatusCodeFromError';
import ErrorBase from './errors/fnFormattedError/ErrorBase';
import logError from './errors/fnFormattedError/logError';
import { ErrorType, BaseError } from './errors/fnFormattedError/ErrorBase/types';
import createSplunkError from './errors/splunkLogger/createSplunkError';
import splunkError from './errors/splunkLogger/splunkError';
import type {
  ConversationReply, ConversationQuickSuggest, ConversationMultiSelect, ConversationMultiSelectItem,
} from './chat/types';
import prepareContinueRequest from './chat/prepareContinueRequest';
import { ContinueRequestType } from './chat/types';
import type { DataLayerEventObjectType } from './gtm/types';
import type { ContinueResponse } from './chat/handleContinueResponse/types';
import type { ContinueRequest } from './chat/prepareContinueRequest/types';
import type { SplunkMessage } from './errors/splunkLogger/types';

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
  gtmDataLayerEcommercePushHandler,
  ContinueRequestType,
  getKeyCodeOnKeyDownEvent,
  prepareContinueRequest,
  sendSplunkErrorFe,
  sendSplunkErrorBe,
  ErrorType,
  ErrorBase,
  createSplunkError,
  splunkError,
  getStatusCodeFromError,
  logError,
  shouldLog,
  isFormattedError,
};

export type {
  AlreadyUploadedFile,
  LocalStorageSavedJob,
  LocalStorageSavedJobs,
  BaseError,
  Job,
  DataLayerEventObjectType,
  ConversationReply,
  ConversationQuickSuggest,
  ConversationMultiSelect,
  ConversationMultiSelectItem,
  ContinueResponse,
  ContinueRequest,
  SplunkMessage,
};
