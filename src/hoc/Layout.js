import React from "react";
import {CustomGreeting} from '../orbit/custom-greeting';

const Layout = ({registry}) => ChildComponent => {

  const TopNavigation = registry.getComponent('layout', 'top-navigation');
  const FooterNavigation = registry.getComponent('layout', 'footer-navigation');
  const Footer = registry.getComponent('layout', 'footer');

  const Component = ({title, header, breadcrumbs, authenticated, ...props}) => {

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

    const { media, headline, subtitle, brand, greeting } = header || {};

    const addCustomGreetings = element => {
      if (!element) return;
      console.log(element);
      // new CustomGreeting(element);
    }

    return (
      <div>
        {ChildComponent.Head && <ChildComponent.Head title={title} {...props} />}
        <header className={`header bg-brand--${brand || 'dark-blue'}`}>
          <div className="platform-placeholder platform-placeholder--navigation text--alternative">
            <div className={`bg-brand--${brand || 'dark-blue'}`}>
              <div className="navigation">
                <div className="wrapper navigation__wrapper">
                  <TopNavigation registry={registry} authenticated={authenticated} {...props} />
                  <SubMenu />
                  <Breadcrumbs breadcrumbs={breadcrumbs} />
                </div>
              </div>
            </div>
          </div>
          <div className="header__wrapper wrapper">
            <div className={`header__content content-block ${!media && "header__content--full-width"}`}>
              {greeting && (
                <p className="content-block__eyebrow text--alternative">
                  <span  />
                  , {greeting}
                </p>
              )}
              <h1 className="content-block__title">
                <span className="content-block__title-top">{headline || title}</span>
                {subtitle && <span className="content-block__title-bottom text--emphasis">{subtitle}</span>}
              </h1>
            </div>
            {media && (
              <div className="header__media media-block">
                <img src={media.image} alt="" />
              </div>
            )}
          </div>
        </header>
        <ChildComponent {...props} />
        <footer className="footer bg-brand--dark-blue">
          <div className="footer__wrapper wrapper">
            <FooterNavigation />
            <Footer />
          </div>
        </footer>
      </div>
    )
  }

  Component.getInitialProps = async ctx => {
    return ChildComponent.getInitialProps ? ChildComponent.getInitialProps(ctx) : {};
  }

  return Component;
}

export default Layout;