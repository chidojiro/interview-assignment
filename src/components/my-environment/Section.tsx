import React from 'react';
import Icon from '../Icon';

type SectionTypes = {
  children?: React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  handleEdit?: () => void;
  handleAddItem?: () => void;
  label?: string | React.ReactNode;
  divider?: boolean;
};
function Section({ children, title, description, handleEdit, handleAddItem, label, divider = false }: SectionTypes) {
  return (
    <div className={`my-environment-container pb-m l:pb-l ${divider ? 'divider' : ''}`}>
      <div className="my-environment-action-header mb-s l:mb-m">
        <div className="my-environment-header">
          <h2 className="title--s mr-xxs">{title}</h2>
          {typeof handleEdit === 'function' && (
            <div className="my-environment__controls mt-xxs">
              <button type="button" data-label={label} className="button--clean" onClick={handleEdit} id={`edit-${(title as string).replace(' ', '-')}`}>
                <Icon iconClassName="icon icon--inline" iconType="edit" />
                <span className="hidden--visually">{label}</span>
              </button>
            </div>
          )}
        </div>
        {description && (
          <div className="my-enviroment-description mt-s">
            <p className="body-copy mb-none">{description}</p>
          </div>
        )}
        {typeof handleAddItem === 'function' && (
          <button type="button" className="button button--s mt-s" onClick={handleAddItem}>
            <Icon iconClassName="icon icon--s icon--inline" iconType="add" />
            {label}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export default Section;
