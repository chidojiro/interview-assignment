import { JobItemMetadataProps } from './JobItemMetadata/JobItemMetadata.types';

interface SavedJobsProps {
  gdsApiKey: string;
  gdsApiUrl: string;
  searchApiUrl: string;
  searchApiKey: string;
  jobPostingWebDetailId: string;
  savedJobId?: string;
  ariaLabel?: string;
  returnJobPostingDetails?: (jobPostingWebDetailId: string, jobPostingTitle: string) => void;
  locale: string;
}

export interface JobCardProps extends JobItemMetadataProps {
  title: string;
  description: string;
  id: string;
  url: string;
  date: string;
  enableLogo?: boolean;
  hasBackground?: boolean;
  activeView?: 'grid' | 'list';
  viewJobText: string;
  closeText: string;
  logoAltTagValue?: string;
  logoSrcTagValue?: string;
  infoIconAriaLabel?: string;
  closeIconAriaLabel?: string;
  savedJobIconAriaLabel?: string;
  savedJobsEnabled?: SavedJobsProps;
  onMouseDownClick?: () => void;
}
