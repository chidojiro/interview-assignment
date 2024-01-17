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
  anonymousSavedLimit?: {
    modalTitle: string;
    modalText: string;
    modalButtonText: string;
    modalButtonLink: string;
    jobsLimit: number,
  };
  displayAs?: 'icon' | 'button';
  savedButtonText?: string;
}
