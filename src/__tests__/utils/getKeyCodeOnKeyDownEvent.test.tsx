import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import getKeyCodeOnKeyDownEvent from '../../utils/getKeyCodeOnKeyDownEvent';

describe('getKeyCodeOnKeyDownEvent', () => {
  const keyMap: Record<number, string> = {
    13: 'Enter',
    38: 'ArrowUp',
    40: 'ArrowDown',
    8: 'Backspace',
    9: 'Tab',
    27: 'Escape',
    33: 'PageUp',
    34: 'PageDown',
    32: 'Space',
  };

  Object.entries(keyMap).forEach(([keyCode, expectedKeyCode]) => {
    test(`should return correct key code for ${expectedKeyCode} key`, () => {
      const { container } = render(<input type="text" onKeyDown={getKeyCodeOnKeyDownEvent} />);
      const event = new KeyboardEvent('keydown', { keyCode: Number(keyCode), code: expectedKeyCode });
      fireEvent(container.firstChild as HTMLInputElement, event as any);

      expect(getKeyCodeOnKeyDownEvent(event as any)).toBe(expectedKeyCode);
    });
  });
});
