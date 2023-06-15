import React, { useEffect, useRef } from 'react';
import { Collapsible } from '@ffw/randstad-local-orbit/js/components/collapsible';
import { Toggable } from '@ffw/randstad-local-orbit/js/components/toggable';
import Icon from '../Icon';

interface FooterColumnNavProps {
  columns: ColumnChildren[];
}

export interface ColumnChildren {
  title: string;
  url: string;
  children: ColumnChildren[] | [];
}

export default function FooterColumnNav({ columns }: FooterColumnNavProps) {
  const columnRefs = useRef<(HTMLDivElement | null)[][]>([]);

  useEffect(() => {
    if (columns.length) {
      const referItems = [];

      // Collect data from columns children into one array.
      columns.forEach((column) => {
        referItems.push(column.children);
      });

      // Assign refs to the DOM elements.
      columnRefs.current = columnRefs.current.slice(0, referItems.length);

      // Apply an Orbit functionality to the menu titles for the small screens and mobile devices.
      // As incoming data is a two-dimensional array, we must transform it into one dimension array.
      for (const item of columnRefs.current.flat()) {
        if (item?.hasAttribute('data-rs-collapsible')
          && item?.hasAttribute('data-rs-toggable')
          && !item.hasAttribute('data-rendered')) {
          new Collapsible(item);
          new Toggable(item);
          item.dataset.rendered = 'rendered';
        }
      }
    }
  }, [columns]);

  return (
    <div data-testid="footer-column-nav" className="footer__grid divider">
      {columns.map((column, columnIndex) => (
        <div className="footer__column" key={column.title}>
          {column.children && column.children.length > 0 && (
            <ul className="extensive-link-list">
              {column.children.map((columnItem, itemIndex) => (
                <li className="extensive-link-list__item divider" key={columnItem.title}>
                  <div
                    ref={(el) => {
                      if (el) {
                        columnRefs.current[columnIndex] = columnRefs.current[columnIndex] || [];
                        columnRefs.current[columnIndex][itemIndex] = el;
                      }
                    }}
                    className="collapsible__trigger"
                    data-rs-collapsible=""
                    data-rs-toggable=""
                    role="button"
                    aria-expanded="false"
                  >
                    <span className="extensive-link-list__list-title">
                      {columnItem.title}
                      {columnItem?.children && columnItem.children.length > 0
                        && (<Icon iconClassName="hidden--from-l icon toggle-arrow" iconType="chevron-down" />)}
                    </span>
                  </div>
                  <div className="collapsible__content" data-rs-collapsible-content="true" aria-hidden="true">
                    {columnItem.children && columnItem.children.length > 0 && (
                      <ul>
                        {columnItem.children.map((link) => (
                          <li key={link.title}>
                            <a href={link.url}>{link.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
