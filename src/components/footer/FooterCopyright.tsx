import React from 'react';

interface FooterCopyrightProps {
  text: string
}

function FooterCopyright({text}: FooterCopyrightProps) {
  return (
    <div className="footer__info" dangerouslySetInnerHTML={{__html: text}} />
  );
}

export default FooterCopyright;
