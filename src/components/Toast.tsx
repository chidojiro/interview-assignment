import React from "react";
import Icon from './Icon';

interface Toast {
  children: React.ReactNode,
  anchor?: string,
  id: string,
  buttonLabel?: string
}

const Toast = ({ children, anchor, id, buttonLabel = "close" }: Toast) => {
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
        <Icon iconClassName="icon fill--dark-blue-50" iconType="close" />
        <span className="hidden--visually">{buttonLabel}</span>
      </button>
    </div>
  );
};

export default Toast;
