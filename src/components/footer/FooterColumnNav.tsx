import React from 'react';
import Icon from '../Icon';

interface FooterColumnNavProps {
  columns: ColumnChildren[];
}

export interface ColumnChildren {
  title: string;
  url: string;
  children: ColumnChildren[] | [];
}

const renderColumnItemLinks = (links: ColumnChildren[]) => {
  if (!links || links.length === 0) {
    return null;
  }
  return (
    <ul>
      {links.map((link) => (
        <li key={link.url}>
          <a href={link.url}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

const renderColumnTitles = (columnTitles: ColumnChildren[], columnId: number) => {
  if (!columnTitles || columnTitles.length === 0) {
    return null;
  }
  return (
    <ul className="extensive-link-list" key={`column-${columnId}`}>
      {
        columnTitles.map((columnTitle, id) => (
          <li className="extensive-link-list__item divider" key={`list-divider-${id}`}>
            <div className="collapsible__trigger" data-rs-collapsible="" role="button" aria-expanded="false" data-rs-toggable="">
              <span className="extensive-link-list__list-title">
                {columnTitle.title}
                {
                  columnTitle?.children && columnTitle.children.length > 0
                  && <Icon iconClassName="hidden--from-l icon toggle-arrow" iconType="chevron-down" />
                }
              </span>
            </div>
            <div className="collapsible__content" data-rs-collapsible-content="" aria-hidden="true">
              { renderColumnItemLinks(columnTitle.children) }
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default function FooterColumnNav({ columns }: FooterColumnNavProps) {
  return (
    <div data-testid="footer-column-nav" className="footer__grid divider">
      {
        columns.map((column, id) => (
          <div className="footer__column" key={column.title}>
            { renderColumnTitles(column.children, id) }
          </div>
        ))
      }
    </div>
  );
}
