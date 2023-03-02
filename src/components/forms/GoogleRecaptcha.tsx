import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha-enterprise';

interface GRecaptchaProps {
  onChange(...any:any): void,
  error?: string;
  touched?: boolean;
  locale?: string;
  sitekey: string;
}
function GoogleRecaptcha({
  onChange,
  error,
  touched,
  locale,
  sitekey,
}: GRecaptchaProps) {
  return (
    <div className={`form-group form-group__input ${touched && error && 'form-group--error'}`}>
      <ReCAPTCHA
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
