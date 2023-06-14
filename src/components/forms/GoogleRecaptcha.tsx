import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha-enterprise';

export type GoogleRecaptchaRef = {
  reset: () => void;
};

interface GRecaptchaProps {
  onChange: (token: string | null) => void;
  error?: string;
  touched?: boolean;
  locale?: string;
  sitekey: string;
  innerRef?: React.Ref<GoogleRecaptchaRef>;
}
function GoogleRecaptcha({
  onChange,
  error,
  touched,
  locale,
  sitekey,
  innerRef,
}: GRecaptchaProps) {
  return (
    <div className={`form-group form-group__input ${touched && error ? 'form-group--error' : ''}`}>
      <ReCAPTCHA
        ref={innerRef}
        sitekey={sitekey}
        onChange={onChange}
        hl={locale ?? 'en'}
      />
      {error && touched
            && <div className="form-group__feedback error">{error}</div>}
    </div>
  );
}

export default GoogleRecaptcha;
