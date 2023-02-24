import React from 'react';
import classNames from 'classnames';
import FooterBottomNav from './FooterBottomNav';
import FooterSocials, { FooterSocial } from './FooterSocials';

interface FooterProps {
  socialNavLinks?: FooterSocial[];
  bottomNavLinks?: [];
  className?: string;
}

/**
 * Footer container.
 * Use this component to add the components for Copyright and Columns.
 * @param socialNavLinks The array for the social links with icons.
 * @param bottomNavLinks The array for the bottom nav links.
 * @param className Used for passing color schemes and other properties.
 * @returns Footer with all components that we have passed data for.
 */
function Footer({ socialNavLinks, bottomNavLinks, className }: FooterProps) {
  if (!socialNavLinks || !bottomNavLinks) return null;

  return (
    <footer className={classNames('footer footer--s', className)}>
      <div className="footer__wrapper wrapper">
        <div className="footer__grid">
          {socialNavLinks && <FooterSocials items={socialNavLinks} />}
          {bottomNavLinks && <FooterBottomNav items={bottomNavLinks} />}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
