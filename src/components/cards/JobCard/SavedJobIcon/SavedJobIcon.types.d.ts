export interface SavedJobIconProps {
  size?: string;
  gdsApiKey: string;
  gdsApiUrl: string;
  searchApiUrl: string;
  searchApiKey: string;
  savedJobId?: string;
  jobPostingWebDetailId: string;
  ariaLabel?: string;
  returnJobPostingWebDetailId?: (jobPostingWebDetailId: string) => void;
  locale: string;
  title: string;
}
