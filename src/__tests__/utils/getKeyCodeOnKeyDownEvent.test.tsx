import { getKeyCodeOnKeyDownEvent } from '../../utils';

describe('getKeyCodeOnKeyDownEvent', () => {
  it('should return the correct key code value', () => {
    const testCases = [
      { keyCode: 13, code: 'Enter' },
      { keyCode: 38, code: 'ArrowUp' },
      { keyCode: 40, code: 'ArrowDown' },
      { keyCode: 8, code: 'Backspace' },
      { keyCode: 9, code: 'Tab' },
      { keyCode: 27, code: 'Escape' },
      { keyCode: 33, code: 'PageUp' },
      { keyCode: 34, code: 'PageDown' },
      { keyCode: 32, code: 'Space' },
      { keyCode: 123, code: undefined },
      { keyCode: undefined, code: 'KeyA' },
      { keyCode: null, code: undefined },
    ];

    testCases.forEach((testCase) => {
      const event = new KeyboardEvent('keydown', { keyCode: testCase.keyCode as number });
      Object.defineProperty(event, 'code', { value: testCase.code });
      expect(getKeyCodeOnKeyDownEvent(event)).toBe(testCase.code);
    });
  });
});
