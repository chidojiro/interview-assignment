export interface SavedJobIconProps {
  size?: string;
  gdsApiKey: string;
  gdsApiUrl: string;
  savedJobId?: string;
  jobPostingWebDetailId: string;
  ariaLabel?: string;
  returnJobPostingWebDetailId?: (jobPostingWebDetailId: string) => void;
}
