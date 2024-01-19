import React from 'react';
import cn from 'classnames';
import Icon from '../../common/Icon';
import { SectionTypes } from './Section.types';

function Section({
  children, title, titleLink, description, handleEdit, handleAddItem, handleDelete, label, divider = false, id, actionHeaderStyles, profileBuilder = false,
}: SectionTypes) {
  return (
    <div className={`my-environment-container ${divider ? 'pb-m l:pb-l divider' : ''}`} id={id}>
      <div className={`my-environment-action-header ${actionHeaderStyles !== undefined ? actionHeaderStyles : 'mb-s l:mb-m'}`}>
        <div className="my-environment-header">
          <h2 className={cn('mr-xxs title--s ', { 'l:text-title-l text-brand-secondary': profileBuilder })}>{titleLink ? <a href={titleLink}>{title}</a> : title}</h2>
          {(typeof handleEdit === 'function' || typeof handleDelete === 'function') && (
            <div className="my-environment__controls mt-xxs" id={`edit-${(title as string).replace(' ', '-')}`}>
              {handleEdit && (
                <button type="button" data-label={label} className="button--clean" onClick={handleEdit} id="create-item-button">
                  <Icon iconClassName="icon icon--inline" iconType="edit" />
                  <span className="hidden--visually">{label}</span>
                </button>
              )}
              {handleDelete && (
                <button type="button" data-label={label} className="button--clean" onClick={handleDelete} id="delete-item-button">
                  <Icon iconClassName="icon icon--inline" iconType="trash" />
                  <span className="hidden--visually">{label}</span>
                </button>
              )}
            </div>
          )}
        </div>
        {description && (
          <div className="my-enviroment-description mt-s">
            <p className={cn('my-environment--empty-state text--alternative mb-none', { 'text-brand-secondary': profileBuilder })}>
              {description}
            </p>
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
