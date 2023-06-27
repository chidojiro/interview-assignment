export type GoogleRecaptchaRef = {
  reset: () => void;
};

export interface GRecaptchaProps {
  onChange: (token: string | null) => void;
  error?: string;
  touched?: boolean;
  locale?: string;
  sitekey: string;
  innerRef?: React.Ref<GoogleRecaptchaRef>;
}
