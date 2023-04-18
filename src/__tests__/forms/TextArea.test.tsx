import React from 'react';
import { render, waitFor } from '@testing-library/react';
import TextArea from '../../components/forms/TextArea';

describe('TextArea component tests', () => {
  test('TextArea renders correctly with required props', () => {
    const { container } = render(<TextArea id="textarea-1" name="textarea-1" label="motivation" />);
    const textareaElement = container.querySelector('textarea[name="textarea-1"]');
    waitFor(() => expect(textareaElement).toBeInTheDocument());
  });
});
