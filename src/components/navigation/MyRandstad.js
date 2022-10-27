import React from "react";
import t from "prop-types";

const MyRandstad = ({ show, loginUrl, label }) => {
  if (!show) {
    return null;
  }

  return (
    <li className="navigation__service-item">
      <a
        href={loginUrl}
        className="navigation__service-link navigation__service-my-randstad hidden--from-l">
        <span className="icon icon--inline">
          <svg>
            <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#person"></use>
          </svg>
        </span>
      </a>
      <a
        href="#"
        className="navigation__service-link navigation__service-my-randstad hidden--until-l"
        data-rs-popover-trigger="login-popover">
        <span className="icon icon--inline">
          <svg>
            <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#person"></use>
          </svg>
        </span>
        <span id="navigation__service-user-text" className="hidden--until-l">
          {label || "my randstad"}
        </span>
      </a>
    </li>
  );
};

MyRandstad.propTypes = {
  show: t.bool,
  loginUrl: t.string,
  label: t.string,
};

export default MyRandstad;
