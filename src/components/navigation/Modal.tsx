import React from "react";
import { Theme } from "./types";
import { getBackground } from "../../utils/getBackground";

interface Modal extends Theme {
  children: React.ReactNode
}

const Modal = ({ theme, children }: Modal) => {
  let modalBackground = getBackground("tertiary");

  if (theme == "sph") {
    modalBackground = "bg-brand--light-grey";
  }

  return (
    <div className="modal modal--navigation hidden--from-l" data-rs-navigation="true">
      <div className={`modal__dialog ${modalBackground}`}>
        <div className="modal__header" data-rs-navigation-modal-header="true"></div>
        <div className="modal__main" data-rs-navigation-modal-main="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
