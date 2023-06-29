import React from 'react';
import classNames from 'classnames';
import FooterColumnNav, { ColumnChildren } from './FooterColumnNav';
import FooterBottomNav, { FooterLink } from './FooterBottomNav';
import FooterCopyright from './FooterCopyright';
import FooterSocials, { FooterSocial } from './FooterSocials';

export interface FooterProps {
  footerColumnNavLinks?: ColumnChildren[] | undefined;
  socialNavLinks?: FooterSocial[] | null;
  bottomNavLinks?: FooterLink[] | null;
  copyright?: string;
  className?: string;
}

/**
 * Footer container.
 * Use this component to add the components for Copyright and Columns.
 * @param footerColumnNavLinks The array for the columns.
 * @param socialNavLinks The array for the social links with icons.
 * @param bottomNavLinks The array for the bottom nav links.
 * @param className Used for passing color schemes and other properties.
 * @param copyright The copyright information, passed as string.
 * @returns Footer with all components that we have passed data for.
 */
function Footer({
  footerColumnNavLinks, socialNavLinks, bottomNavLinks, className, copyright,
}: FooterProps) {
  if (!socialNavLinks || !bottomNavLinks) return null;

  return (
    <footer className={classNames('footer', className)}>
      <div className="footer__wrapper wrapper">
        {footerColumnNavLinks && footerColumnNavLinks.length > 0 && <FooterColumnNav columns={footerColumnNavLinks} />}
        <div className="footer__grid">
          {socialNavLinks && socialNavLinks.length > 0 && <FooterSocials items={socialNavLinks} />}
          {bottomNavLinks && bottomNavLinks.length > 0 && <FooterBottomNav items={bottomNavLinks} />}
          {copyright && copyright.length > 0 && <FooterCopyright text={copyright} />}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
