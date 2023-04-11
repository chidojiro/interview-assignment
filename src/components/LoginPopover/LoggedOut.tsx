import React from 'react';
import Button from '../button/Button';

interface LoggedOutProps {
  children?: string | React.ReactNode;
  title?: string | React.ReactNode;
  registerUrl?: string;
  registerTitle?: string;
  registerText?: string | React.ReactNode;
  loginUrl?: string;
  loginTitle?: string;
  loginText?: string | React.ReactNode;
  RouterComponent?: React.FC<any>;
  callback?: () => void;
}

function LoggedOut({ title, children, registerUrl, registerText, loginUrl, loginText, RouterComponent, callback }: LoggedOutProps) {
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
