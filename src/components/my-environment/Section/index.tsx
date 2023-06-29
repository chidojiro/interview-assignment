import React from 'react';
import Icon from '../../common/Icon';
import { SectionTypes } from './Section.types';

function Section({
  children, title, description, handleEdit, handleAddItem, label, divider = false, id,
}: SectionTypes) {
  return (
    <div className={`my-environment-container ${divider ? 'pb-m l:pb-l divider' : ''}`} id={id}>
      <div className="my-environment-action-header mb-s l:mb-m">
        <div className="my-environment-header">
          <h2 className="title--s mr-xxs">{title}</h2>
          {typeof handleEdit === 'function' && (
            <div className="my-environment__controls mt-xxs" id={`edit-${(title as string).replace(' ', '-')}`}>
              <button type="button" data-label={label} className="button--clean" onClick={handleEdit} id="create-item-button">
                <Icon iconClassName="icon icon--inline" iconType="edit" />
                <span className="hidden--visually">{label}</span>
              </button>
            </div>
          )}
        </div>
        {description && (
          <div className="my-enviroment-description mt-s">
            <p className="my-environment--empty-state text--alternative mb-none">{description}</p>
          </div>
        )}
        {typeof handleAddItem === 'function' && (
          <button type="button" className="button button--s mt-s" onClick={handleAddItem} id="create-item-icon-button">
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
