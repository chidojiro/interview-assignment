import React from 'react';

interface HeaderTitleProps {
  children: string | JSX.Element;
}

function HeaderTitle({ children }: HeaderTitleProps) {
  return (
    <div className="header-title header__wrapper wrapper">
      <div className="header__content header__content--full-width content-block">
        <h1 className="content-block__title">{children}</h1>
      </div>
    </div>
  );
}

export default HeaderTitle;
