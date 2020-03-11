import React from "react";
import { Modal as ModalJS } from '../../orbit/components/modal'

const Modal = ({ title, children, onClose, footer, iconPath }) => {

  const addOrbitJS = element => {
    if (!element) return;
    const ModalJSInit = new ModalJS(element);

    ModalJSInit.openModal(true)

    element.addEventListener('ModalClosed', () => {
      onClose()
    })
  }

  return (
    <div>
      <div className="modal" ref={addOrbitJS} data-rs-modal>
        <div className="modal__dialog" data-rs-modal-dialog>
          <div className="modal__header" data-rs-modal-header>
            <h3 className="modal__title">{title}</h3>
            <button className="button--icon-only modal__close" data-rs-modal-close-trigger>
              <span className="icon icon--inline hidden--from-l fill-brand--blue">
                <svg>
                  <use xlinkHref={`${iconPath}#close`}></use>
                </svg>
              </span>
              <span className="icon icon--l icon--inline hidden--until-l">
                <svg>
                  <use xlinkHref={`${iconPath}#close-30`}></use>
                </svg>
              </span>
            </button>
          </div>
          <div className="modal__main modal__main--overflow" data-rs-modal-main>{children}</div>
          {footer && <div className="modal__footer divider divider--top" data-rs-modal-footer>{footer}</div>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
