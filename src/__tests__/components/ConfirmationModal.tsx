import React from 'react';
import { render } from '@testing-library/react';
import ConfirmationModal from '../../components/overlays/ConfirmationModal';

test('Modal exist', () => {
  const { container } = render(
    <ConfirmationModal
      title="are you sure?"
      confirmButtonText="delete account"
      cancelButtonText="cancel"
      content="Do you really want to delete your account? This action can not be undone."
      onClose={() => console.log('Cancel')}
      onSubmit={() => console.log('Submit')}
    />,
  );
  const modalElement = container.querySelector('.modal');
  expect(modalElement).toContainHTML("<p class='form__header'>Do you really want to delete your account? This action can not be undone.</p>");
});

test("Check if has group label", () => {
  const { container } = render(
    <>
      <ConfirmationModal
        title="are you sure?"
        confirmButtonText="delete account"
        cancelButtonText="cancel"
        content="Do you really want to delete your account? This action can not be undone."
        onClose={() => console.log('Cancel')}
        onSubmit={() => console.log('Submit')}
      />
    </>,
  );
  const consentElement = container.querySelector(".button--filled");

  expect(consentElement?.tagName).toBe("A");
});
