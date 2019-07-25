import React from "react";

const TopNavigation = ({ registry, authenticated }) => {

  const templateSuggestions = {
    mainMenu: ['main'],
    services: ['services'],
    utilityBar: ['utility-bar'],
  };

  for (let key in templateSuggestions) {
    templateSuggestions[key].forEach(suggestion => {
      templateSuggestions[key].push(`${suggestion}--${authenticated ? 'authenticated-user' : 'anonymous-user'}`);
    });
  }

  const Logo = registry.getComponent('svg', 'logo');
  const MainMenu = registry.getComponent('menu', templateSuggestions.mainMenu);
  const Services = registry.getComponent('menu', templateSuggestions.services);
  const UtilityBar = registry.getComponent('menu', templateSuggestions.utilityBar);
  return (
    <div className="navigation__top">
      <a className="logo-randstad" href="/">
        <Logo />
      </a>
      <MainMenu />
      <Services />
      <UtilityBar />
    </div>
  );
}

export default TopNavigation;