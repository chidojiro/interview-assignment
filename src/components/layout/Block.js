import React from "react";

const Block = ({
  label,
  children,
  className,
  size,
  align,
  blockControl,
  headerExtra,
  ...props
}) => {
  return (
    <div className={`block ${className || ""} ${size && `block--${size}`}`}>
      <div className="block__wrapper wrapper">
        {label && (
          <div className="block__header">
            <h2 className="block__title">{label}</h2>
            {blockControl && (
              <a href="#" onClick={blockControl.cb} className="block__control">
                <span className="icon icon--inline fill-brand--blue">
                  <svg>
                    <use xlinkHref={`${blockControl.path}/icons.svg#add`}></use>
                  </svg>
                </span>
                {blockControl.label}
              </a>
            )}
            {headerExtra}
          </div>
        )}
        <div
          className={`block__content ${size && `block__content--${size}`} ${
            align && `block__content--align-${align}`
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Block;
