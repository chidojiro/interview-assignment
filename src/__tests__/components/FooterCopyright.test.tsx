import React from 'react';
import { render, within } from '@testing-library/react';
import FooterCopyright from '../../components/footer/FooterCopyright';

describe('FooterCopyright component tests', () => {
  const text = "Example text";

  render(<FooterCopyright text={text}/>);
  const { findByText } = within(document.querySelector(".footer__info") as HTMLElement);
  it("Checks if the provided text is rendered.", async () => {
    const result = await findByText(text).then(result => {
      return result.innerHTML;
    });
    expect(result).toBe(text);
  })
});
