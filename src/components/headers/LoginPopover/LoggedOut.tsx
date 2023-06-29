import React from 'react';
import Button from '../../buttons/Button';
import { LoggedOutProps } from './LoginPopover.types';

function LoggedOut({
  title,
  children,
  registerUrl,
  registerText,
  loginUrl,
  loginText,
  RouterComponent,
  callback,
}: LoggedOutProps) {
  return (
    <>
      <div className="popover__title">
        {title}
      </div>
      <div className="body-copy">
        {children}
      </div>
      <div className="popover__action flex-wrap">
        <Button id="register-popover" onClick={callback} data-rs-popover-button-close="" href={registerUrl} variant="filled" fullWidth className="" RouterComponent={RouterComponent}>
          {registerText as string}
        </Button>
        <Button id="login-popover" onClick={callback} data-rs-popover-button-close="" href={loginUrl} fullWidth className="ml-none" RouterComponent={RouterComponent}>
          {loginText as string}
        </Button>
      </div>
    </>
  );
}

export default LoggedOut;
