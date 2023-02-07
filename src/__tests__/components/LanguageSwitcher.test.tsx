import React from 'react';
import { render } from '@testing-library/react';
import LanguageSwitcher from '../../components/headers/LanguageSwitcher/LanguageSwitcher';

describe('Language Switcher tests', () => {
  test('Language Switcher exist', () => {
    const { container } = render(<LanguageSwitcher activeLanguage="en" languages={['en', 'fr', 'ak']} />);
    const languageSwitcherElement = container.querySelector('.language-switcher ');
    expect(languageSwitcherElement)
      .toBeInTheDocument();
  });

  test('Amount of languages is correct', () => {
    const { container } = render(<LanguageSwitcher activeLanguage="en" languages={['en', 'fr', 'ak']} />);
    // @ts-ignore
    const languagesElements = [...container.querySelectorAll('.top-link__item')];
    expect(languagesElements.length)
      .toBe(3);
  });

  test('Not active language has tag "a"', () => {
    const secondLanguage = 'fr';
    const { container } = render(<LanguageSwitcher activeLanguage="en" languages={['en', 'fr']} />);
    const activeLanguageElement = container.querySelector('a');

    expect(activeLanguageElement)
      .toHaveAttribute(
        'href',
        `/${secondLanguage}/`,
      );
  });

  test('Active language has tag "li"', () => {
    const activeLanguage = 'en';
    const { container } = render(<LanguageSwitcher activeLanguage={activeLanguage} languages={['en', 'fr', 'ak']} />);
    const activeLanguageElement = container.querySelector('li');

    expect(activeLanguageElement)
      .toHaveTextContent('en');
  });
});
