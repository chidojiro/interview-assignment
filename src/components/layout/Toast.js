import React, {useState, useEffect} from "react";
import { Toast as Orbit } from "../../orbit/components/toast";

const Toast = ({message, onClose, show, icon}) => {
  const [active, setActive] = useState(show);

  useEffect(() => {
    setActive(show);
  }, [show]);

  const classes = ['toast'];

  if (active) {
    classes.push('show');
    classes.push('toast--active');
  }

  const refferenced = element => {
    new Orbit(element);
  }

  return (
    <div className={classes.join(' ')} data-rs-toast="3" data-rs-toast-3="" ref={refferenced}>
      <p className="toast__message">{message}</p>
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