import React from 'react';
import cn from 'classnames';
import ReCAPTCHA from 'react-google-recaptcha-enterprise';
import { GRecaptchaProps } from './GoogleRecaptcha.types';

function GoogleRecaptcha({
  onChange,
  error,
  touched,
  locale,
  sitekey,
  innerRef,
}: GRecaptchaProps) {
  return (
    <div className={cn('form-group', 'form-group__input', { 'form-group--error': touched && error })}>
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
