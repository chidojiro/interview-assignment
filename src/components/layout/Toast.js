import React, {useState, useEffect} from "react";

const Toast = ({message, onClose, show}) => {
  const [active, setActive] = useState(show);

  useEffect(() => {
    setActive(show);
  }, [show]);

  const classes = ['toast'];

  if (active) {
    classes.push('show');
    classes.push('toast--active');
  }

  return (
    <div className={classes.join(' ')} data-rs-toast="3" data-rs-toast-3="">
      <p className="toast__message">{message}</p>
      <button className="button--icon-only" data-rs-closable="data-rs-toast-3" onClick={onClose}>
        <span className="icon fill--dark-blue-50">
          <svg>
            <use xlinkHref="/static/assets/image/icons.svg#close"/>
          </svg>
        </span>
        <span className="hidden--visually">close</span>
      </button>
    </div>
  );
};

export default Toast;