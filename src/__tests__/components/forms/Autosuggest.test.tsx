import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Autosuggest from '../../../components/forms/Autosuggest';

// Autosuggest field prevents user fast typing with a debounce technology.
const waitForDebounce = (timeout = 155) => new Promise((resolve) => {
  setTimeout(resolve, timeout);
});

const renderAutosuggest = async (props?: object, typeInValue = '') => {
  const config = {
    id: 'customId',
    required: false,
    config: { skipFilter: true },
    optionalLabel: 'optional label description',
    formGroupLabel: 'Nice Autosuggest',
    placeholder: 'Placeholder text',
    'data-custom': 'custom-attr',
    'data-testid': 'autosuggest',
    ...props,
  };

  const wrapper = render(<Autosuggest name="suggestion-input" {...config} />);
  if (typeInValue) {
    const input = await wrapper.findByTestId(config['data-testid']) as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: typeInValue } });
      await waitForDebounce();
    });
  }

  return { ...wrapper, config };
};

describe('Autosuggest component tests', () => {
  test('Autosuggest renders correctly.', async () => {
    const { findByText, findByDisplayValue } = await renderAutosuggest({ initialValue: 'input default value' });
    expect(await findByText('Nice Autosuggest')).toBeTruthy();
    expect(await findByText('optional label description')).toBeTruthy();
    const input = await findByDisplayValue('input default value') as HTMLInputElement;
    expect(input.name).toBe('suggestion-input');
    expect(input.id).toBe('customId');
    expect(input.placeholder).toBe('Placeholder text');
    expect(input.dataset.custom).toBe('custom-attr');
    expect(input.required).toBeFalsy();
  });

  test('Autosuggest callbacks have been triggered.', async () => {
    const onInputChange = jest.fn();
    const onSelectItem = jest.fn();

    const { findByTestId, findByText } = await renderAutosuggest({
      items: ['A1', 'A2', 'A3'],
      config: { skipFilter: true },
      onSelectItem,
      onInputChange,
    });

    const input = await findByTestId('autosuggest') as HTMLInputElement;
    // Test debounce mechanism.
    await act(async () => {
      fireEvent.change(input, { target: { value: 'foo' } });
      await waitForDebounce(55);
      fireEvent.change(input, { target: { value: 'Bar' } });
      await waitForDebounce(55);
      fireEvent.change(input, { target: { value: 'Baz' } });
      await waitForDebounce(55);
    });
    expect(onInputChange).toHaveBeenCalledTimes(0);

    await act(async () => {
      fireEvent.change(input, { target: { value: 'B' } });
      await waitForDebounce();
    });

    expect(onInputChange).toHaveBeenCalledWith('B');
    expect(await findByText('A1')).toBeTruthy();
    expect(await findByText('A2')).toBeTruthy();
    expect(await findByText('A3')).toBeTruthy();

    await act(async () => {
      fireEvent.click(await findByText('A2'));
      await waitForDebounce();
    });
    expect(onSelectItem).toHaveBeenCalledWith('A2');
    expect(onInputChange).toHaveBeenCalledWith('A2');
    expect(input.value).toBe('A2');
  });

  test('No results text is configurable.', async () => {
    const { container, rerender, config } = await renderAutosuggest({}, 'B');

    const noResults = container.querySelector('li.select-menu__item--no-result') as HTMLLIElement;
    // Default no results text.
    expect(noResults.textContent).toBe('no results, please try another search');
    // No results options provided.
    const newConfig = { ...config, noResultsText: 'Custom text!' };
    rerender(<Autosuggest name="someName" {...newConfig} />);
    expect(noResults.textContent).toBe('Custom text!');
  });

  test('Matches have been highlighted in the dropdown.', async () => {
    const { container, findByText } = await renderAutosuggest(
      { items: ['Fancy item 1', 'Fancy item 2', 'Ordinary Item 3'] },
      'Fancy',
    );
    const suggestionList = container.querySelector('ul') as HTMLUListElement;
    const highlights = suggestionList.querySelectorAll('mark');
    expect(highlights.length).toBe(2);
    expect((highlights[0] as HTMLElement).textContent).toBe('Fancy');
    expect((highlights[1] as HTMLElement).textContent).toBe('Fancy');
    expect(await findByText('Ordinary Item 3')).toBeTruthy();
  });

  test('Skip filter configuration option works.', async () => {
    const { container, rerender, config } = await renderAutosuggest(
      { items: ['Fancy item 1', 'Fancy item 2', 'Ordinary Item 3'] },
      'Fancy',
    );
    const suggestionList = container.querySelector('ul') as HTMLUListElement;
    expect(suggestionList.children.length).toBe(3);

    const newConfig = { ...config, config: { skipFilter: false } };
    rerender(<Autosuggest name="someName" {...newConfig} />);
    expect(suggestionList.children.length).toBe(2);
  });

  test('Stop words configuration option works.', async () => {
    const includesStopWord = 'foo -region';
    const {
      findByText,
      findByTestId,
      rerender,
      config,
    } = await renderAutosuggest(
      { items: [includesStopWord, 'foo normal'] },
      'tre',
    );
    const input = await findByTestId('autosuggest') as HTMLInputElement;
    expect(input.value).toBe('tre');

    const newConfig = { ...config, config: { skipFilter: true, itemsStripWordList: [' -region'] } };
    rerender(<Autosuggest name="someName" {...newConfig} />);

    await act(async () => {
      fireEvent.change(input, { target: { value: 'tre' } });
      await waitForDebounce();
      fireEvent.click(await findByText(includesStopWord));
    });
    expect(input.value).toBe('foo');
  });

  test('"Allow numeric" configuration option works for number inputs.', async () => {
    const includesNumericValue = 'Article title (3000)';
    const {
      findByText,
      findByTestId,
      rerender,
      config,
    } = await renderAutosuggest(
      { items: [includesNumericValue, 'foo normal'], initialValue: '4000' },
      'tre',
    );

    const input = await findByTestId('autosuggest') as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: 800 } });
      await waitForDebounce();
      fireEvent.click(await findByText(includesNumericValue));
    });
    expect(input.value).toBe(includesNumericValue);

    const newConfig = { ...config, config: { skipFilter: true, allowNumericValue: true } };
    rerender(<Autosuggest name="someName" {...newConfig} />);

    await act(async () => {
      fireEvent.change(input, { target: { value: 900 } });
      await waitForDebounce();
      fireEvent.click(await findByText(includesNumericValue));
    });
    expect(input.value).toBe('3000');
  });

  test('Keyboard accessibility.', async () => {
    const activeSelector = 'li.select-menu__item--preselect';
    const { container, findByTestId } = await renderAutosuggest(
      { items: ['A', 'B', 'C'] },
      'A',
    );
    const input = await findByTestId('autosuggest') as HTMLInputElement;

    // Verify that first element selected by default.
    expect((container.querySelector(activeSelector) as HTMLLIElement).textContent).toBe('A');

    // Go to the end of a list with arrow down.
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' });
    expect((container.querySelector(activeSelector) as HTMLLIElement).textContent).toBe('B');
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' });
    expect((container.querySelector(activeSelector) as HTMLLIElement).textContent).toBe('C');
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' });
    expect((container.querySelector(activeSelector) as HTMLLIElement).textContent).toBe('C');

    // Go to the top of a list with arrow up.
    fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' });
    expect((container.querySelector(activeSelector) as HTMLLIElement).textContent).toBe('B');
    fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' });
    expect((container.querySelector(activeSelector) as HTMLLIElement).textContent).toBe('A');
    fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' });
    expect((container.querySelector(activeSelector) as HTMLLIElement).textContent).toBe('A');

    // Verify that page up and down correspondingly move selection to the first and last elements.
    fireEvent.keyDown(input, { key: 'PageDown', code: 'PageDown' });
    expect((container.querySelector(activeSelector) as HTMLLIElement).textContent).toBe('C');
    fireEvent.keyDown(input, { key: 'PageUp', code: 'PageUp' });
    expect((container.querySelector(activeSelector) as HTMLLIElement).textContent).toBe('A');

    // Verify that user can select item from the list using Enter or Tab.
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(input.value).toBe('B');
    expect(container.querySelector('ul')).toBeNull();
    // Using tab.
    await act(async () => {
      fireEvent.change(input, { target: { value: 'A' } });
      await waitForDebounce();
    });
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Tab', code: 'Tab' });
    expect(input.value).toBe('B');
    expect(container.querySelector('ul')).toBeNull();

    // Verify that user can close suggestion box with Escape button.
    await act(async () => {
      fireEvent.change(input, { target: { value: 'A' } });
      await waitForDebounce();
    });
    expect(container.querySelector('ul')).toBeTruthy();
    fireEvent.keyDown(input, { key: 'Escape', code: 'Escape' });
    expect(container.querySelector('ul')).toBeNull();
  });

  test('renders custom input when customInput is true', async () => {
    const { container, findByDisplayValue } = await renderAutosuggest({ initialValue: 'custom input default value', customInput: true });
    const input = (await findByDisplayValue('custom input default value')) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Some custom value' } });
    const customInputAction = container.querySelector('.select-menu__item--action') as HTMLElement;
    expect(customInputAction).toBeInTheDocument();
  });

  test('does not render custom input when customInput is false / undefined', async () => {
    const { container, findByDisplayValue } = await renderAutosuggest({ initialValue: 'custom input default value' });
    const input = (await findByDisplayValue('custom input default value')) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Some custom value' } });
    const customInputAction = container.querySelector('.select-menu__item--action') as HTMLElement;
    expect(customInputAction).not.toBeInTheDocument();
  });

  test('renders default custom input label when customInput is true', async () => {
    const { container, findByDisplayValue } = await renderAutosuggest({ initialValue: 'custom input default value', customInput: true });
    const input = (await findByDisplayValue('custom input default value')) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Some custom value' } });
    expect(container).toHaveTextContent('Add:');
  });

  test('renders custom input label when customInput is true and customInputLabel is defined', async () => {
    const { container, findByDisplayValue } = await renderAutosuggest({
      initialValue: 'custom input default value',
      customInput: true,
      customInputLabel: 'My custom input label:',
    });
    const input = (await findByDisplayValue('custom input default value')) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Some custom value' } });
    expect(container).toHaveTextContent('My custom input label:');
  });

  test('renders custom input icon when customInput is true', async () => {
    const { container, findByDisplayValue } = await renderAutosuggest({ initialValue: 'custom input default value', customInput: true });
    const input = (await findByDisplayValue('custom input default value')) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Some custom value' } });
    const customInputIcon = container.querySelector('.select-menu__item--action svg') as HTMLElement;
    expect(customInputIcon).toBeInTheDocument();
  });
});
