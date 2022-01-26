import React from "react";
import t from "prop-types";

import { getBackground } from "../../utils/getBackground";

const Modal = ({ theme, children }) => {
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

Modal.propTypes = {
  theme: t.string,
  children: t.any,
};

export default Modal;
