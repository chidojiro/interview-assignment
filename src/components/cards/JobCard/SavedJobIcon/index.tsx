import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import saveJobEvent from '../../../../utils/gtmEvents';
import Icon from '../../../common/Icon';
import { postSavedJobs, deleteSavedJobs, handleAnonymousSavedJobs } from '../../../../utils/savedJobs/savedJobsHandler';
import { SavedJobIconProps } from './SavedJobIcon.types';
import getUserData from '../../../../utils/getUserData';
import { LocalStorageSavedJobs } from '../../../../utils';
import getSavedJobsLocalStorage from '../../../../utils/savedJobs/savedJobsLocalStorage/getSavedJobsLocalStorage';
import SavedJobLimitModal from '../SavedJobLimitModal';

function SavedJobIcon({
  size = 'l',
  gdsApiKey,
  gdsApiUrl,
  shareIdTokenAcrossSubdomains,
  searchApiKey,
  searchApiUrl,
  savedJobId,
  jobPostingWebDetailId,
  ariaLabel,
  title,
  opcoCodes,
  returnJobPostingDetails,
  locale,
  anonymousSavedLimit = {
    modalTitle: '',
    modalText: '',
    modalButtonText: '',
    modalButtonLink: '',
    jobsLimit: 10,
  },
  displayAs = 'icon',
  savedButtonText = 'save'
}: SavedJobIconProps) {
  const {
    modalTitle, modalText, modalButtonText, modalButtonLink, jobsLimit,
  } = anonymousSavedLimit;
  const [iconFilled, setIconFilled] = useState<boolean>(!!savedJobId);
  const [anonymousSavedLimitModalOpen, setAnonymousSavedLimitModalOpen] = useState<boolean>(false);
  // For logged users, we need to store the saved job id from the GDS API, so we can add/delete it later.
  // This is not the Job ID, but the entity ID from the GDS for that particular job.
  const [savedJobApiId, setSavedJobApiId] = useState(savedJobId);
  const iconClasses = cn('icon', {
    [`icon--${size}`]: size,
  }, 'icon--inline');
  const buttonClasses = cn('icon__toggler', 'icon--l', {
    'icon__toggler--active': savedJobApiId || iconFilled,
    'button--save-icon': displayAs === 'button'
  });

  useEffect(() => {
    setIconFilled(!!savedJobId);
    setSavedJobApiId(savedJobId);
  }, [savedJobId]);

  useEffect(() => {
    const onIconStateChangeExt = ((event: CustomEvent) => {
      // Check if this icon is for the same job as the icon which triggered the event.
      if (event.detail?.jobId === jobPostingWebDetailId) {
        setIconFilled(event.detail.iconFilled);
        setSavedJobApiId(event.detail.savedJobApiId);
      }
    }) as EventListener;

    // Listen for an event, triggered when other heart icon in the same page (including in an iframe in the same page)
    // has changed its state
    window.top?.addEventListener('saved-job-toggle', onIconStateChangeExt);

    return () => window.top?.removeEventListener('saved-job-toggle', onIconStateChangeExt);
  }, [jobPostingWebDetailId]);

  const onIconClick = async () => {
    const { loginStatus } = getUserData();
    const newState = { iconFilled, savedJobApiId };

    if (!loginStatus) {
      const savedJobs: LocalStorageSavedJobs | undefined = getSavedJobsLocalStorage();
      const found = savedJobs?.content?.findIndex((r) => r.id === jobPostingWebDetailId);

      // If the job is not saved and the limit reached, we show the modal.
      if (found === -1 && (savedJobs?.totalElements || 0) >= jobsLimit) {
        setAnonymousSavedLimitModalOpen(true);
        return;
      }

      const filled = await handleAnonymousSavedJobs(searchApiUrl, searchApiKey, jobPostingWebDetailId, locale, opcoCodes as string);
      if (filled && !iconFilled) {
        newState.iconFilled = true;

        saveJobEvent(title, true);
      } else if (!filled && iconFilled) {
        if (returnJobPostingDetails) {
          returnJobPostingDetails(jobPostingWebDetailId, title);
        }
        newState.iconFilled = false;
        newState.savedJobApiId = undefined;

        saveJobEvent(title, false);
      }
    } else if (savedJobApiId && savedJobApiId !== '') {
      newState.iconFilled = false;
      const deleteSavedResponse = await deleteSavedJobs(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains, savedJobApiId);
      if (returnJobPostingDetails && deleteSavedResponse) {
        returnJobPostingDetails(jobPostingWebDetailId, title);
      }
      if (deleteSavedResponse) {
        newState.savedJobApiId = null;
      }

      saveJobEvent(title, false);
    } else {
      const postSavedResponse = await postSavedJobs(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains, jobPostingWebDetailId);
      if (postSavedResponse?.data) {
        newState.savedJobApiId = postSavedResponse?.data?.id;
      }
      newState.iconFilled = true;
      saveJobEvent(title, true);
    }

    setIconFilled(newState.iconFilled);
    setSavedJobApiId(newState.savedJobApiId);

    // Dispatch a custom event to notify all other heart icons for this job.
    const event = new CustomEvent('saved-job-toggle', {
      detail: {
        jobId: jobPostingWebDetailId, ...newState,
      },
    });

    // Dispatch to topmost window so that all other windows (iframes) to receive this event.
    window.top?.dispatchEvent(event);
  };

  const showSavedJobsLimitModal = anonymousSavedLimitModalOpen && (modalTitle && modalText && modalButtonText && modalButtonLink);

  return (
    <>
        {showSavedJobsLimitModal && (
          <SavedJobLimitModal modalTitle={modalTitle} modalText={modalText} modalButtonText={modalButtonText} modalButtonLink={modalButtonLink} setAnonymousSavedLimitModalOpen={setAnonymousSavedLimitModalOpen} />
        )}
        <button type="button" className={buttonClasses} aria-label={ariaLabel} aria-pressed={(savedJobApiId || iconFilled) ? 'true' : 'false'} id={`fav-${jobPostingWebDetailId}`} onClick={onIconClick}>
          <span className={iconClasses}>
            <Icon iconType={displayAs === 'button' ? 'heart' : 'heart-30'}  iconClassName={null} />
          </span>
          <span className={iconClasses}>
            <Icon iconType={displayAs === 'button' ? 'heart-filled' : 'heart-filled-30'} iconClassName={null} />
          </span>
          {displayAs === 'button' ? <span className='button--save-icon--text'>{savedButtonText}</span> : null}
        </button>
    </>
  );
}

export default SavedJobIcon;
