import React from 'react';
import { ServiceLinksProps } from './ServiceLinks.types';

function ServiceLinks({ links }: ServiceLinksProps) {
  return (
    <ul className="top-link">
      {
        links.map((item) => (
          <li className="top-link__item" key={item.serviceTitle}>
            <a href={item.serviceUrl}>
              {item.serviceTitle}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default ServiceLinks;
