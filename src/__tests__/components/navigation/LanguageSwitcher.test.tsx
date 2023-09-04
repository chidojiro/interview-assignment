import React from 'react';
import {
  fireEvent,
  render,
  act,
  waitFor,
} from '@testing-library/react';
import LanguageSwitcher from '../../../components/navigation/LanguageSwitcher';
import { CustomWindow } from '../../../utils/gtm/types';

describe('LanguageSwitcher component tests', () => {
  beforeEach(() => {
    (window as unknown as CustomWindow).dataLayer = [];
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete (window as unknown as { dataLayer?: string[] }).dataLayer;
  });

  const items = [
    {
      language: 'en', isActive: true, url: '/en', filters: { query: 'test' },
    },
    {
      language: 'fr', isActive: false, url: '/fr', filters: {},
    },
  ];

  const toastSettings = {
    id: 'test',
    title: { en: 'title', fr: 'title fr' },
    buttonSuccessText: { en: 'success', fr: 'success fr' },
    buttonCloseText: { en: 'close', fr: 'close fr' },
  };

  it('LanguageSwitcher renders correctly with its props', () => {
    const { container } = render(
      <LanguageSwitcher
        items={items}
        extraClasses="l:ml-s"
        useToast
        toastSettings={toastSettings}
      />,
    );

    const languageSwitcherComponent = container.querySelector('.language-switcher');
    const languageItems = container.querySelectorAll('.top-link__item');

    expect(languageSwitcherComponent).toBeInTheDocument();
    expect(languageSwitcherComponent).toHaveClass('l:ml-s');
    expect(languageItems.length).toBe(items.length);
    expect(languageItems[0]).toBeInTheDocument();
    expect(languageItems[0]).toHaveTextContent('en');
    expect(languageItems[1]).toBeInTheDocument();
    expect(languageItems[1]).toHaveTextContent('fr');
  });

  it('renders the language links correctly', () => {
    const { getByText } = render(<LanguageSwitcher items={items} />);

    items.forEach((lang) => {
      const languageLink = getByText(lang.language);
      expect(languageLink).toBeInTheDocument();

      if (!lang.isActive) {
        // disable for use in forEach
        // eslint-disable-next-line jest/no-conditional-expect
        expect(languageLink).toHaveAttribute('href', lang.url);
        // disable for use in forEach
        // eslint-disable-next-line jest/no-conditional-expect
        expect(languageLink).toHaveAttribute('hrefLang', lang.language);
      }
    });
  });

  it('does not render anything if items prop is empty or has fewer than 2 items', () => {
    const { container } = render(<LanguageSwitcher items={[]} />);
    expect(container.firstChild).toBeNull();

    const singleItem = [{ language: 'English', isActive: true }];
    const { container: container2 } = render(<LanguageSwitcher items={singleItem} />);
    expect(container2.firstChild).toBeNull();
  });

  it('toggles toastOpen state and updates selectedLanguage on language link click', () => {
    const { getByText } = render(<LanguageSwitcher items={items} useToast />);
    const languageLink = getByText('fr');

    fireEvent.click(languageLink);

    expect(languageLink).toHaveAttribute('href', '/fr');
    expect(languageLink).toHaveAttribute('hrefLang', 'fr');
  });

  it('does dataLayer event works correctly', async () => {
    const { container } = render(<LanguageSwitcher items={items} useToast toastSettings={toastSettings} />);

    const buttonSwitch = container.querySelector('.language-link');
    expect(buttonSwitch).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(buttonSwitch as HTMLButtonElement);
    });

    await act(async () => {
      jest.useFakeTimers();
      jest.advanceTimersByTime(2000);
    });

    const button = container.querySelector('.button--filled');
    expect(button).toBeInTheDocument();
    expect(button?.textContent).toBe('success fr');

    await act(async () => {
      fireEvent.click(button as HTMLButtonElement);
    });

    await waitFor(() => expect((window as unknown as CustomWindow).dataLayer).toEqual([{ event_params: null }, {
      event: 'interaction',
      event_params: {
        event_name: 'language_switch', current_language: 'en', switched_language: 'fr', filters_active: 'true',
      },
    }]));
  });
});
