import React from "react";

const Layout = ({registry}) => ChildComponent => {

  const TopNavigation = registry.getComponent('layout', 'top-navigation');

  const Component = ({title, breadcrumbs, authenticated, ...props}) => {

    const templateSuggestions = {
      subMenu: ['sub'],
      breadcrumbs: ['breadcrumbs'],
    };

    for (let key in templateSuggestions) {
      templateSuggestions[key].forEach(suggestion => {
        templateSuggestions[key].push(`${suggestion}--${authenticated ? 'authenticated-user' : 'anonymous-user'}`);
      });
    }

    const SubMenu = registry.getComponent('menu', templateSuggestions.subMenu);
    const Breadcrumbs = registry.getComponent('layout', templateSuggestions.breadcrumbs);

    return (
      <div>
        {ChildComponent.Head && <ChildComponent.Head title={title} {...props} />}
        <header className="header header--text bg-brand--dark-blue">
          <div className="platform-placeholder platform-placeholder--navigation text--alternative">
            <div className="bg-brand--dark-blue">
              <div className="navigation">
                <div className="wrapper navigation__wrapper">
                  <TopNavigation registry={registry} authenticated={authenticated} />
                  <SubMenu />
                  <Breadcrumbs breadcrumbs={breadcrumbs} />
                </div>
              </div>
            </div>
          </div>
          <div className="header__wrapper wrapper">
            <div className="header__content header__content--full-width content-block">
              <h1 className="content-block__title">
                <span className="content-block__title-top">{title}</span>
              </h1>
            </div>
          </div>
        </header>
        <ChildComponent {...props} />
      </div>
    )
  }

  Component.getInitialProps = async ctx => {
    return ChildComponent.getInitialProps ? ChildComponent.getInitialProps(ctx) : {};
  }

  return Component;
}

export default Layout;