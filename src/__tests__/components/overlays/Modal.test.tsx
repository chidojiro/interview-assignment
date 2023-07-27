import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import Modal from '../../../components/overlays/Modal';

function ComponentWithModal(props: { [key: string]: string | boolean }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpenModal(true)}>Open modal</button>
      {openModal && (
        <Modal title="Modal title" {...props}>Modal Content</Modal>
      )}
    </>
  );
}

describe('Modal component', () => {
  const { pushState } = window.history;
  beforeEach(() => {
    window.history.pushState = pushState;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be rendered with all of its props', () => {
    const { container } = render(
      <Modal
        title="Modal title"
        onClose={() => {}}
        footer={<div id="modal-footer">Modal footer</div>}
        bgVariantBrand="test-variant-brand"
        footerDivider
        footerDividerTop
      >
        <div id="modal-content">Modal content</div>
      </Modal>,
    );
    const modalElement = container.querySelector('.modal');
    const modalContent = container.querySelector('#modal-content');
    const modalFooter = container.querySelector('#modal-footer');
    const modalElementFirstChild = modalElement?.firstChild;
    const modalFooterParent = modalFooter?.parentElement;

    expect(modalElement).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
    expect(modalContent).toHaveTextContent('Modal content');
    expect(modalFooter).toBeInTheDocument();
    expect(modalFooter).toHaveTextContent('Modal footer');
    expect(modalElementFirstChild).toHaveClass('modal__dialog test-variant-brand');
    expect(modalFooterParent).toHaveClass('modal__footer divider divider--top');
  });

  it('should change window history whenever it is opened or closed', () => {
    window.history.pushState = jest.fn();
    const { container, getByText } = render(<ComponentWithModal />);

    fireEvent.click(getByText('Open modal'));
    expect(window.history.pushState).toHaveBeenCalledWith({}, '', '/?modal_open=modal');
    fireEvent.click(container.querySelector('button.modal__close') as HTMLButtonElement);
    expect(window.history.pushState).toHaveBeenCalledWith({}, '', '/');
  });

  it('should not change window history once opened or closed when disableBrowserHistory is set to true', () => {
    window.history.pushState = jest.fn();
    const { container, getByText } = render(<ComponentWithModal disableBrowserHistory />);

    fireEvent.click(getByText('Open modal'));
    expect(window.history.pushState).not.toHaveBeenCalled();
    fireEvent.click(container.querySelector('button.modal__close') as HTMLButtonElement);
    expect(window.history.pushState).not.toHaveBeenCalled();
  });
});
