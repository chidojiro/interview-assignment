export interface SavedJobIconProps {
  size?: string;
  gdsApiKey: string;
  gdsApiUrl: string;
  shareIdTokenAcrossSubdomains: boolean;
  searchApiUrl: string;
  searchApiKey: string;
  savedJobId?: string | null;
  jobPostingWebDetailId: string;
  ariaLabel?: string;
  returnJobPostingDetails?: (jobPostingWebDetailId: string, jobPostingTitle: string) => void;
  locale: string;
  title: string;
  anonymousSavedLimitModalTitle?: string;
  anonymousSavedLimitModalText?: string;
  anonymousSavedLimitModalButtonText?: string;
  anonymousSavedJobsLimit?: number;
}
