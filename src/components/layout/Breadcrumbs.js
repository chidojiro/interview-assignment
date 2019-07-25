import Reach from "react";

const Breadcrumbs = ({ breadcrumbs }) => (
  <nav className="breadcrumb" aria-label="breadcrumb">
    <a href="#" className="breadcrumb__link hidden--from-l">one level higher</a>
    <ul className="breadcrumb__list hidden--until-l">
      {breadcrumbs.map((step, index) => (
        <li className="breadcrumb__item" key={index}>
          {step.uri && <a href={step.url} className="breadcrumb__link">{step.title}</a>}
          {!step.uri && step.title}
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumbs;