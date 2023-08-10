import { KeyboardEvent } from 'react';

function getKeyCodeOnKeyDownEvent(event: KeyboardEvent) {
  let keyCode;
  if (event != null) {
    if (typeof event.code === 'undefined') {
      switch (event.keyCode) {
        case 13:
          keyCode = 'Enter';
          break;
        case 38:
          keyCode = 'ArrowUp';
          break;
        case 40:
          keyCode = 'ArrowDown';
          break;
        case 8:
          keyCode = 'Backspace';
          break;
        case 9:
          keyCode = 'Tab';
          break;
        case 27:
          keyCode = 'Escape';
          break;
        case 33:
          keyCode = 'PageUp';
          break;
        case 34:
          keyCode = 'PageDown';
          break;
        case 32:
          keyCode = 'Space';
          break;

        default:
          keyCode = undefined;
          break;
      }
    } else {
      keyCode = event.code;
    }
  }
  return keyCode;
}

export default getKeyCodeOnKeyDownEvent;
