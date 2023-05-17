import React from "react";
import cn from 'classnames';

interface ApplicationProcessProps {
  children: React.ReactNode,
  title: string,
  description: string,
  backgroundColor: string
}

const ApplicationProcess = ({ children, title, description, backgroundColor = '' }: ApplicationProcessProps) => {

  return (
    <div
    className={cn('block job-details-reordered-component blog-overview blog-overview--carousel blog-overview--carousel-on-s application-process', `${backgroundColor}`)}>
    <div className="block__wrapper block__wrapper--stacked">
      <div className="block__header block__header--split block__header--l wrapper">
        <h2 className="block__title">{title}</h2>
        <div className="block__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="block__content">
        <div className="blog-overview__wrapper wrapper" data-rs-carousel-wrapper="data-rs-carousel-wrapper">
          <ul className="blog-overview__list" data-rs-carousel="application-process" data-rs-carousel-button-id="job">
            {children}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ApplicationProcess;