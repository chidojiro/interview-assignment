import React from 'react';
import { FooterCopyrightProps } from './FooterCopyright.types';

function FooterCopyright({ text }: FooterCopyrightProps) {
  return (
    // Data from s3Bucket comes as string with HTML.
    // eslint-disable-next-line react/no-danger
    <div className="footer__info" dangerouslySetInnerHTML={{ __html: text }} />
  );
}

export default FooterCopyright;
