import React, {
  ReactElement,
  useEffect,
  useState,
} from 'react';
import cn from 'classnames';
import saveJobEvent from '../../../../utils/gtmEvents';
import Icon from '../../../common/Icon';
import { postSavedJobs, deleteSavedJobs, handleAnonymousSavedJobs } from '../../../../utils/savedJobs/savedJobsHandler';
import { SavedJobIconProps } from './SavedJobIcon.types';
import getUserData from '../../../../utils/getUserData';
import { LocalStorageSavedJobs } from '../../../../utils';
import getSavedJobsLocalStorage from '../../../../utils/savedJobs/savedJobsLocalStorage/getSavedJobsLocalStorage';
import Modal from '../../../overlays/Modal';
import Button from '../../../buttons/Button';

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
  returnJobPostingDetails,
  locale,
  anonymousSavedLimitModalTitle = '',
  anonymousSavedLimitModalText = '',
  anonymousSavedLimitModalButtonText = '',
  anonymousSavedJobsLimit = 10,
}: SavedJobIconProps) {
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
  });

  useEffect(() => {
    setIconFilled(!!savedJobId);
    setSavedJobApiId(savedJobId);
  }, [savedJobId]);

  const onIconClick = async () => {
    const { loginStatus } = getUserData();

    if (!loginStatus) {
      const savedJobs: LocalStorageSavedJobs | undefined = getSavedJobsLocalStorage();
      if ((savedJobs?.totalElements || 0) >= anonymousSavedJobsLimit) {
        setAnonymousSavedLimitModalOpen(true);
        return;
      }

      const filled = await handleAnonymousSavedJobs(searchApiUrl, searchApiKey, jobPostingWebDetailId, locale);
      if (filled && !iconFilled) {
        setIconFilled(true);

        saveJobEvent(title, true);
      } else if (!filled && iconFilled) {
        if (returnJobPostingDetails) {
          returnJobPostingDetails(jobPostingWebDetailId, title);
        }
        setIconFilled(false);

        saveJobEvent(title, false);
      }
    } else if (savedJobApiId && savedJobApiId !== '') {
      setIconFilled(false);
      const deleteSavedResponse = await deleteSavedJobs(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains, savedJobApiId);
      if (returnJobPostingDetails && deleteSavedResponse) {
        returnJobPostingDetails(jobPostingWebDetailId, title);
      }
      if (deleteSavedResponse) {
        setSavedJobApiId(null);
      }

      saveJobEvent(title, false);
    } else {
      const postSavedResponse = await postSavedJobs(gdsApiKey, gdsApiUrl, shareIdTokenAcrossSubdomains, jobPostingWebDetailId);
      if (postSavedResponse?.data) {
        setSavedJobApiId(postSavedResponse?.data?.id);
      }
      setIconFilled(true);
      saveJobEvent(title, true);
    }
  };

  const showSavedJobsLimitModal = anonymousSavedLimitModalOpen && (anonymousSavedLimitModalTitle && anonymousSavedLimitModalText && anonymousSavedLimitModalButtonText);
  const modalContent: {
    title: string;
    children: ReactElement;
    footer: ReactElement;
  } = {
    title: anonymousSavedLimitModalTitle,
    children:
  <>
    <p>{anonymousSavedLimitModalText}</p>
    <div className="flex items-center justify-center">
      <img src={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/PlussSignsAndHeart_illustration_UseBackgroundWhite_RGB.svg`} alt="" />
    </div>
  </>,
    footer:
  <Button
    type="button"
    fullWidth
  >
    {anonymousSavedLimitModalButtonText}
  </Button>,
  };

  return (
    <>
      {showSavedJobsLimitModal && (
        <Modal
          onClose={() => setAnonymousSavedLimitModalOpen(false)}
          {...modalContent}
        />
      )}
      <button type="button" className={buttonClasses} aria-label={ariaLabel} aria-pressed={savedJobApiId ? 'true' : 'false'} id={`fav-${jobPostingWebDetailId}`} onClick={onIconClick}>
        <span className={iconClasses}>
          <Icon iconType="heart-30" iconClassName={null} />
        </span>
        <span className={iconClasses}>
          <Icon iconType="heart-filled-30" iconClassName={null} />
        </span>
      </button>
    </>
  );
}

export default SavedJobIcon;
