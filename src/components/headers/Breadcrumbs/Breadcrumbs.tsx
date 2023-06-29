import React from 'react';

interface BreadcrumbLink {
  breadcrumbTitle: string;
  breadcrumbUrl?: string;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbLink[];
}

function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav className='breadcrumb' aria-label='breadcrumb'>
      <ul className='breadcrumb__list hidden--until-l'>
        {
          breadcrumbs?.map((item, index) => {
            if (index === (breadcrumbs.length - 1)) {
              return (
                <li className='breadcrumb__item' key={item.breadcrumbTitle}>
                  {item.breadcrumbTitle}
                </li>
              );
            }

            return (
              <li className='breadcrumb__item' key={item.breadcrumbTitle}>
                <a className='breadcrumb__link' href={item.breadcrumbUrl}>{item.breadcrumbTitle}</a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
