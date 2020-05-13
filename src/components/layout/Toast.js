import React, { useState, useEffect } from "react";

const Toast = ({ message, onClose, show, icon, links = [] }) => {
  const [active, setActive] = useState(show);

  useEffect(() => {
    setActive(show);
  }, [show]);

  const classes = ['toast'];

  if (active) {
    classes.push('show');
    classes.push('toast--active');
  } else {
    classes.push('closable--closed');
  }

  return (
    <div className={classes.join(' ')} data-rs-toast="3" data-rs-toast-3="">
      <p className="toast__message">{message}</p>
      {links && <div className="toast__cta">
        {links.map((link, key) => {
          const { text, classes = [], ...attr } = link;
          classes.push('toast__cta-link')

          return <a {...attr} key={key} className={classes.join(" ")}>{text}</a>
        })}
      </div>}
      <button className="button--icon-only" data-rs-closable="data-rs-toast-3" onClick={onClose}>
        {icon && (
          <span className="icon fill--dark-blue-50">
            {icon}
          </span>
        )}
        <span className="hidden--visually">close</span>
      </button>
    </div>
  );
};

export default Toast;