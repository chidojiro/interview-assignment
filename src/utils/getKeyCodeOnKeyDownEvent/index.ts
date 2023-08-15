import { KeyboardEvent } from 'react';

function getKeyCodeOnKeyDownEvent(event: KeyboardEvent): string | undefined {
  if (!event) {
    return undefined;
  }

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

  return event.code || keyMap[event.keyCode];
}

export default getKeyCodeOnKeyDownEvent;
