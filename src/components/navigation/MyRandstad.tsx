import React from "react";

export interface MyRandstadProps {
  show?: boolean,
  loginUrl: string,
  label: string
}

const MyRandstad = ({ show, loginUrl, label }: MyRandstadProps) => {
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
            <use xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/my-randstad/src/assets/img/icons.svg#person`} />
          </svg>
        </span>
      </a>
      <a
        href={loginUrl}
        className="navigation__service-link navigation__service-my-randstad hidden--until-l"
        data-rs-popover-trigger="login-popover">
        <span className="icon icon--inline">
          <svg>
            <use xlinkHref={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/icons.svg#person`} />
          </svg>
        </span>
        <span id="navigation__service-user-text" className="hidden--until-l">
          {label || "my randstad"}
        </span>
      </a>
    </li>
  );
};

export default MyRandstad;
