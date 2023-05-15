import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Autosuggest from '../../components/forms/Autosuggest';

// Autosuggest field prevents user fast typing with a debounce technology.
const waitForDebounce = (timeout = 310) => new Promise((resolve) => {
  setTimeout(resolve, timeout);
});

describe('Autosuggest component tests', () => {
  test('Autosuggest renders correctly.', async () => {
    const { findByText, findByDisplayValue } = render(
      <Autosuggest
        initialValue="input default value"
        name="someName"
        id="customId"
        required={false}
        optionalLabel="optional label description"
        formGroupLabel="Nice Autosuggest"
        placeholder="Placeholder text"
        capitalize
        data-custom="custom-attr"
      />,
    );
    expect(await findByText('Nice Autosuggest')).toBeTruthy();
    expect(await findByText('optional label description')).toBeTruthy();
    const input = await findByDisplayValue('input default value') as HTMLInputElement;
    expect(input.name).toBe('someName');
    expect(input.id).toBe('customId');
    expect(input.placeholder).toBe('Placeholder text');
    expect(input.dataset.custom).toBe('custom-attr');
    expect(input.required).toBeFalsy();
  });

  test('Autosuggest callbacks have been triggered.', async () => {
    const onChange = jest.fn();
    const onSelectItem = jest.fn();

    const { findByTestId, findByText } = render(
      <Autosuggest
        items={['A1', 'A2', 'A3']}
        config={{ skipFilter: true }}
        onChange={onChange}
        onSelectItem={onSelectItem}
        name="someName"
        data-testid="autosuggest"
      />,
    );

    const input = await findByTestId('autosuggest') as HTMLInputElement;
    // Test fast typing.
    await act(async () => {
      fireEvent.change(input, { target: { value: 'foo' } });
      await waitForDebounce(200);
      fireEvent.change(input, { target: { value: 'Bar' } });
      await waitForDebounce(200);
      fireEvent.change(input, { target: { value: 'Baz' } });
      await waitForDebounce(200);
    });
    expect(onChange).toHaveBeenCalledTimes(0);

    await act(async () => {
      fireEvent.change(input, { target: { value: 'B' } });
      await waitForDebounce();
    });

    expect(onChange).toHaveBeenCalledWith('B');
    expect(await findByText('A1')).toBeTruthy();
    expect(await findByText('A2')).toBeTruthy();
    expect(await findByText('A3')).toBeTruthy();

    await act(async () => {
      fireEvent.click(await findByText('A2'));
      await waitForDebounce();
    });
    expect(onSelectItem).toHaveBeenCalledWith('A2');
    expect(onChange).toHaveBeenCalledWith('A2');
    expect(input.value).toBe('A2');
  });

  test('No results text is configurable.', async () => {
    const { container, findByTestId, rerender } = render(
      <Autosuggest
        name="someName"
        data-testid="autosuggest"
      />,
    );

    const input = await findByTestId('autosuggest') as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: 'B' } });
      await waitForDebounce();
    });
    const noResults = container.querySelector('li.select-menu__item--no-result') as HTMLLIElement;
    // Default no results text.
    expect(noResults.textContent).toBe('no results, please try another search');

    // No results options provided.
    rerender(
      <Autosuggest
        noResultsText="Custom text!"
        name="someName"
      />,
    );
    expect(noResults.textContent).toBe('Custom text!');
  });

  test('Matches have been highlighted in the dropdown.', async () => {
    const { container, findByTestId, findByText } = render(
      <Autosuggest
        items={['Fancy item 1', 'Fancy item 2', 'Ordinary Item 3']}
        name="someName"
        config={{ skipFilter: true }}
        data-testid="autosuggest"
      />,
    );

    const input = await findByTestId('autosuggest') as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: 'Fancy' } });
      await waitForDebounce();
    });
    const suggestionList = container.querySelector('ul') as HTMLUListElement;
    const highlights = suggestionList.querySelectorAll('mark');
    expect(highlights.length).toBe(2);
    expect((highlights[0] as HTMLElement).textContent).toBe('Fancy');
    expect((highlights[1] as HTMLElement).textContent).toBe('Fancy');
    expect(await findByText('Ordinary Item 3')).toBeTruthy();
  });

  test('Skip filter configuration option works.', async () => {
    const { container, findByTestId, rerender } = render(
      <Autosuggest
        items={['Fancy item 1', 'Fancy item 2', 'Ordinary Item 3']}
        name="someName"
        config={{ skipFilter: true }}
        data-testid="autosuggest"
      />,
    );

    const input = await findByTestId('autosuggest') as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: 'Fancy' } });
      await waitForDebounce();
    });
    const suggestionList = container.querySelector('ul') as HTMLUListElement;
    expect(suggestionList.children.length).toBe(3);

    rerender(
      <Autosuggest
        items={['Fancy item 1', 'Fancy item 2', 'Item 3']}
        name="someName"
        data-testid="autosuggest"
      />,
    );
    expect(suggestionList.children.length).toBe(2);
  });

  test('Stop words configuration option works.', async () => {
    const includesStopWord = 'foo -region';
    const { findByText, findByTestId, rerender } = render(
      <Autosuggest
        items={[includesStopWord, 'foo normal']}
        name="someName"
        config={{ skipFilter: true }}
        data-testid="autosuggest"
      />,
    );
    const input = await findByTestId('autosuggest') as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: 'tre' } });
      await waitForDebounce();
      fireEvent.click(await findByText(includesStopWord));
    });
    expect(input.value).toBe(includesStopWord);

    rerender(
      <Autosuggest
        items={[includesStopWord, 'foo normal1']}
        name="someName"
        config={{ skipFilter: true, itemsStripWordList: [' -region'] }}
        data-testid="autosuggest"
      />,
    );
    await act(async () => {
      fireEvent.change(input, { target: { value: 'tre' } });
      await waitForDebounce();
      fireEvent.click(await findByText(includesStopWord));
    });
    expect(input.value).toBe('foo');
  });

  test('"Allow numeric" configuration option works for number inputs.', async () => {
    const includesNumericValue = 'Article title (3000)';
    const { findByText, findByTestId, rerender } = render(
      <Autosuggest
        items={[includesNumericValue, 'foo normal']}
        name="someName"
        initialValue="4000"
        config={{ skipFilter: true }}
        data-testid="autosuggest"
      />,
    );
    const input = await findByTestId('autosuggest') as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: 800 } });
      await waitForDebounce();
      fireEvent.click(await findByText(includesNumericValue));
    });
    expect(input.value).toBe(includesNumericValue);

    rerender(
      <Autosuggest
        items={[includesNumericValue, 'foo normal']}
        name="someName"
        config={{ skipFilter: true, allowNumericValue: true }}
        data-testid="autosuggest"
      />,
    );
    await act(async () => {
      fireEvent.change(input, { target: { value: 900 } });
      await waitForDebounce();
      fireEvent.click(await findByText(includesNumericValue));
    });
    expect(input.value).toBe('3000');
  });

  test('Keyboard accessibility.', async () => {
    const activeSelector = 'li.select-menu__item--preselect';
    const { container, findByTestId } = render(
      <Autosuggest
        items={['A', 'B', 'C']}
        name="someName"
        config={{ skipFilter: true }}
        data-testid="autosuggest"
      />,
    );
    const input = await findByTestId('autosuggest') as HTMLInputElement;
    await act(async () => {
      fireEvent.change(input, { target: { value: 'A' } });
      await waitForDebounce();
    });
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
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Tab', code: 'Tab' });
    expect(input.value).toBe('C');
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
});
