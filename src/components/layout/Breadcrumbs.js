import Reach from "react";

const Breadcrumbs = ({ breadcrumbs }) => {
  let go_back;

  if (breadcrumbs.length > 1) {
    go_back = breadcrumbs[breadcrumbs.length - 2];
  }
  return (
    <div className="navigation__bottom">
      <nav className="breadcrumb" aria-label="breadcrumb">
        {go_back && <a href={go_back.uri} className="breadcrumb__link hidden--from-l">{go_back.title}</a>}
        <ul className="breadcrumb__list hidden--until-l">
          {breadcrumbs.map((step, index) => (
            <li className="breadcrumb__item" key={index}>
              {step.uri && <a href={step.uri} className="breadcrumb__link">{step.title}</a>}
              {!step.uri && step.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
};

export default Breadcrumbs;