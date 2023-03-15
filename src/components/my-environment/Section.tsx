import React from 'react';
import Icon from '../Icon';

type SectionTypes = {
  children?: React.ReactNode;
  title: string | React.ReactNode;
  handleEdit?: () => void;
  handleAddItem?: () => void;
  label?: string | React.ReactNode;
  divider?: boolean;
};
function Section({
  children, title, handleEdit, handleAddItem, label, divider = false,
}: SectionTypes) {
  return (
    <div className={`my-environment-container pb-m l:pb-l ${divider ? 'divider' : ''}`}>
      <div className="my-environment-header mb-s">
        <h2 className="title--s mr-xxs">{title}</h2>
        {typeof handleEdit === 'function' && (
          <div className="my-environment__controls mt-xxs">
            <button type="button" data-label={label} className="button--clean" onClick={handleEdit}>
              <Icon iconClassName="icon icon--inline" iconType="edit" />
              <span className="hidden--visually">{label}</span>
            </button>
          </div>
        )}
      </div>
      {typeof handleAddItem === 'function' && (
        <button type="button" className="button button--s mt-s" onClick={handleAddItem}>
          <Icon iconClassName="icon icon--s icon--inline" iconType="add" />
          {label}
        </button>
      )}
      {children}
    </div>
  );
}

export default Section;
