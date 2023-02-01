import React from 'react';
import { render } from '@testing-library/react';
import LanguageSwitcher from '../../components/headers/LanguageSwitcher/LanguageSwitcher';

describe('Language Switcher tests', () => {
  test('Language Switcher exist', () => {
    const { container } = render(<LanguageSwitcher activeLanguage='en' secondLanguage='fr' />);
    const languageSwitcherElement = container.querySelector('.language-switcher ');
    expect(languageSwitcherElement)
      .toBeInTheDocument();
  });

  test('Second language has tag "a"', () => {
    const secondLanguage = 'fr';
    const { container } = render(<LanguageSwitcher activeLanguage='en' secondLanguage={secondLanguage} />);
    const activeLanguageElement = container.querySelector('a');

    expect(activeLanguageElement).toHaveAttribute(
      'href',
      `/${secondLanguage}/`,
    );
  });

  test('Active language has tag "li"', () => {
    const activeLanguage = 'en';
    const { container } = render(<LanguageSwitcher activeLanguage={activeLanguage} secondLanguage='fr' />);
    const activeLanguageElement = container.querySelector('li');

    expect(activeLanguageElement).toHaveTextContent('en');
  });
});
