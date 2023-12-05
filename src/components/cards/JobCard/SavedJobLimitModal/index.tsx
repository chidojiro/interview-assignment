import React from 'react';
import { SavedJobLimitModalProps } from './SavedJobLimitModal.types';
import Modal from '../../../overlays/Modal';
import Button from '../../../buttons/Button';

function SavedJobLimitModal(props: SavedJobLimitModalProps) {
  const { modalTitle, modalText, modalButtonText, setAnonymousSavedLimitModalOpen } = props;

  return (
    <Modal
      title={modalTitle}
      footer={(<Button type="button" fullWidth>{modalButtonText}</Button>)}
      onClose={() => setAnonymousSavedLimitModalOpen(false)}
    >
      <>
        <p>{modalText}</p>
        <div className="flex items-center justify-center">
          <img src={`${process.env.NEXT_PUBLIC_RESOURCE_PREFIX}/src/assets/img/PlussSignsAndHeart_illustration_UseBackgroundWhite_RGB.svg`} alt="" />
        </div>
      </>
    </Modal>
  );
}

export default SavedJobLimitModal;
