import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/button/Button';

test('Button exist', () => {
  const { container } = render(<Button>test</Button>);
  const buttonElement = container.querySelector('.button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('test');
});

for (const [title, props, expectedClass] of [
  ['Small button', { small: true }, 'button--s'],
  ['Filled button', { variant: 'filled' }, 'button--filled'],
  ['Plain button', { variant: 'plain' }, 'button--plain'],
  ['Dark button', { dark: true }, 'button--dark-blue'],
  ['Button with icon', { icon: 'person' }, 'button--icon'],
  ['Button with preloader', { loader: true }, 'button--preloader'],
  ['Full width button', { fullWidth: true }, 'button--full-width'],
  ['Disabled button', { disabled: true }, 'button--disabled'],
]) {
  test(`${title} class '${expectedClass}'`, () => {
    // @ts-ignore
    const { container } = render(<Button {...props} />);
    const buttonElement = container.querySelector('.button');

    // @ts-ignore
    expect(buttonElement).toHaveClass(expectedClass);
  });
}

test('Tag name depending on href', () => {
  const { container } = render(
    <>
      <Button className='as-link' href='/test' />
      <Button className='as-button' />
    </>,
  );
  const buttonElement = container.querySelector('.as-button');
  const linkElement = container.querySelector('.as-link');

  expect(linkElement?.tagName).toBe('A');
  expect(buttonElement?.tagName).toBe('BUTTON');
});
