import React from 'react';

interface ServiceLink {
  serviceTitle: string;
  serviceUrl: string;
}

interface ServiceLinksProps {
  links: ServiceLink[];
}

function ServiceLinks({ links }: ServiceLinksProps) {
  return (
    <div className="navigation__link-bar hidden--until-l">
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
    </div>
  );
}

export default ServiceLinks;
