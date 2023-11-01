import React, {
  useEffect,
  useState,
} from 'react';
import cn from 'classnames';
import saveJobEvent from '../../../../utils/gtmEvents';
import Icon from '../../../common/Icon';
import { postSavedJobs, deleteSavedJobs, handleAnonymousSavedJobs } from '../../../../utils/savedJobs/savedJobsHandler';
import { SavedJobIconProps } from './SavedJobIcon.types';
import getUserData from '../../../../utils/getUserData';

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
}: SavedJobIconProps) {
  const [iconFilled, setIconFilled] = useState<boolean>(!!savedJobId);
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

  return (
    <button type="button" className={buttonClasses} aria-label={ariaLabel} aria-pressed={savedJobApiId ? 'true' : 'false'} id={`fav-${jobPostingWebDetailId}`} onClick={onIconClick}>
      <span className={iconClasses}>
        <Icon iconType="heart-30" iconClassName={null} />
      </span>
      <span className={iconClasses}>
        <Icon iconType="heart-filled-30" iconClassName={null} />
      </span>
    </button>
  );
}

export default SavedJobIcon;
