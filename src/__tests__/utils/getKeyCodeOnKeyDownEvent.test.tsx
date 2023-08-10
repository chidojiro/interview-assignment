import { getKeyCodeOnKeyDownEvent } from '../../utils';

describe('getKeyCodeOnKeyDownEvent', () => {
  it('should return "Enter" for key code 13', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 13 });
    Object.defineProperty(event, 'code', { value: 'Enter' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('Enter');
  });

  it('should return "ArrowUp" for key code 38', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 38 });
    Object.defineProperty(event, 'code', { value: 'ArrowUp' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('ArrowUp');
  });

  it('should return "ArrowDown" for key code 40', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 40 });
    Object.defineProperty(event, 'code', { value: 'ArrowDown' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('ArrowDown');
  });

  it('should return "Backspace" for key code 8', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 8 });
    Object.defineProperty(event, 'code', { value: 'Backspace' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('Backspace');
  });

  it('should return "Tab" for key code 9', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 9 });
    Object.defineProperty(event, 'code', { value: 'Tab' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('Tab');
  });

  it('should return "Escape" for key code 27', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 27 });
    Object.defineProperty(event, 'code', { value: 'Escape' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('Escape');
  });

  it('should return "PageUp" for key code 33', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 33 });
    Object.defineProperty(event, 'code', { value: 'PageUp' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('PageUp');
  });

  it('should return "PageDown" for key code 34', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 34 });
    Object.defineProperty(event, 'code', { value: 'PageDown' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('PageDown');
  });

  it('should return "Space" for key code 32', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    Object.defineProperty(event, 'code', { value: 'Space' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('Space');
  });

  it('should return undefined for unknown key code', () => {
    const event = new KeyboardEvent('keydown', { keyCode: 123 }); // Unknown key code
    Object.defineProperty(event, 'code', { value: undefined });
    expect(getKeyCodeOnKeyDownEvent(event)).toBeUndefined();
  });

  it('should return event.code when defined', () => {
    const event = new KeyboardEvent('keydown');
    Object.defineProperty(event, 'code', { value: 'KeyA' });
    expect(getKeyCodeOnKeyDownEvent(event)).toBe('KeyA');
  });

  it('should return undefined for null event', () => {
    expect(getKeyCodeOnKeyDownEvent(null as any)).toBeUndefined();
  });
});
