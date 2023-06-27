import React from 'react';
import { render } from '@testing-library/react';
import ConfirmationModal from '../../../components/overlays/ConfirmationModal';

test('Modal exist', () => {
  const { container } = render(
    <ConfirmationModal
      title="are you sure?"
      confirmButtonText="delete account"
      cancelButtonText="cancel"
      content="Do you really want to delete your account? This action can not be undone."
      onClose={() => {}}
      onSubmit={() => {}}
    />,
  );
  const modalElement = container.querySelector('.modal');
  expect(modalElement).toHaveTextContent('Do you really want to delete your account? This action can not be undone.');
});

test('Check if has group label', () => {
  const { container } = render(
    <ConfirmationModal
      title="are you sure?"
      confirmButtonText="delete account"
      cancelButtonText="cancel"
      content="Do you really want to delete your account? This action can not be undone."
      onClose={() => {}}
      onSubmit={() => {}}
    />,
  );
  const consentElement = container.querySelector('.button--filled');

  expect(consentElement?.tagName).toBe('A');
});
