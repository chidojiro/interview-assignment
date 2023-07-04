import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../../../components/overlays/Modal';

describe('Modal component', () => {
  it('Modal is rendered with all of its props', () => {
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
});
