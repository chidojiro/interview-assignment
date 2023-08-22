import React from 'react';
import Icon from '../../common/Icon';
import { MyEnvironmentLayoutTypes } from './MyEnvironmentLayout.types';

function MyEnvironmentLayout({
  title, handleAddItem, label, description, children, href,
}: MyEnvironmentLayoutTypes) {
  return (
    <div className="block block--my-randstad block--xs">
      <div className="block__wrapper wrapper pt-l l:pt-xl">
        <div className="block__header">
          <h2 className="text-title-s l:text-title-m l:mb-s">{title}</h2>
          {typeof handleAddItem === 'function' && (
            <a href={`${href || '#?'}`} className="block__control" onClick={handleAddItem}>
              <Icon iconClassName="icon icon--inline fill-brand--blue" iconType="add" />
              {label}
            </a>
          )}
          {description && (
            <div className="block__description text--alternative">
              <p className="text-body-m l:text-body-l">{description}</p>
            </div>
          )}
        </div>
        <div className="block__content block__content--align-right block__content--s mt-m l:mt-none">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MyEnvironmentLayout;
