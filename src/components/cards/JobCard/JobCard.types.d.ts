import { JobItemMetadataProps } from './JobItemMetadata/JobItemMetadata.types';
import { NoticeProps } from '../../notifications/Notice/Notice.types';

interface SavedJobsProps {
  gdsApiKey: string;
  gdsApiUrl: string;
  shareIdTokenAcrossSubdomains: boolean;
  searchApiUrl: string;
  searchApiKey: string;
  jobPostingWebDetailId: string;
  savedJobId?: string;
  ariaLabel?: string;
  opcoCodes: string;
  returnJobPostingDetails?: (jobPostingWebDetailId: string, jobPostingTitle: string) => void;
  locale: string;
  anonymousSavedLimit?: {
    modalTitle: string;
    modalText: string;
    modalButtonText: string;
    modalButtonLink: string;
    jobsLimit: number,
  };
}

interface trackAndTraceData {
  title: string;
  status?: string;
}

export interface JobCardProps extends JobItemMetadataProps {
  title: string;
  description: string;
  id: string;
  url: string;
  backsideUrl?: string;
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
  disabled?: boolean;
  notice?: NoticeProps | null;
  opcoCodes: string | string[];
  badgeText?: string | undefined;
  RouterComponent?: React.FC<any>;
  trackAndTraceData?: trackAndTraceData;
}
