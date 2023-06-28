import React from 'react';
import Icon from '../common/Icon';

type MyEnvironmentLayoutTypes = {
  title: string | React.ReactNode;
  handleAddItem?: () => void;
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
};
function MyEnvironmentLayout({
  title, handleAddItem, label, description, children,
}: MyEnvironmentLayoutTypes) {
  return (
    <div className="block block--my-randstad block--xs">
      <div className="block__wrapper wrapper pt-l l:pt-xl">
        <div className="block__header">
          <h2 className="text-title-s l:text-title-m l:mb-s">{title}</h2>
          {typeof handleAddItem === 'function' && (
            <a href="#" className="block__control" onClick={handleAddItem}>
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
