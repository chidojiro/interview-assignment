import React from "react";
import PropTypes from "prop-types";

const Toast = ({ children, anchor, id, buttonLabel = "close" }) => {
  const attributes = {
    "data-rs-toast": id,
    [`data-rs-toast-${id}`]: "",
  };

  if (anchor) {
    attributes["data-rs-toast-anchor"] = anchor;
  }

  return (
    <div className="toast" {...attributes}>
      <p className="toast__message">{children}</p>
      <button className="button--icon-only" data-rs-closable={`data-rs-toast-${id}`}>
        <span className="icon fill--dark-blue-50">
          <svg>
            <use xlinkHref="/themes/custom/bluex/dist/assets/image/icons.svg#close"></use>
          </svg>
        </span>
        <span className="hidden--visually">{buttonLabel}</span>
      </button>
    </div>
  );
};

Toast.propTypes = {
  children: PropTypes.node,
  anchor: PropTypes.string,
  id: PropTypes.string,
  buttonLabel: PropTypes.string,
};

Toast.defaultProps = {
  buttonLabel: "close",
};

export default Toast;
