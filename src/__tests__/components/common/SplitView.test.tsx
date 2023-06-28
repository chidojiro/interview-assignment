import React from 'react';
import { render } from '@testing-library/react';
import SplitView from '../../../components/common/SplitView';

describe('SplitView component', () => {
  test('renders with illustration prop', () => {
    const { getByText, getByAltText } = render(
      <SplitView
        alternative
        illustration="https://example.com/ILLUSTRATION.svg"
        altTitle="Illustration title"
        bgColor="secondary"
        eyebrow="Eyebrow text"
        title="Title text"
        description="Description text"
        buttonLink="https://example.com"
        buttonText="Button text"
      />,
    );

    expect(getByText('Eyebrow text')).toBeInTheDocument();
    expect(getByText('Title text')).toBeInTheDocument();
    expect(getByText('Description text')).toBeInTheDocument();
    expect(getByText('Button text')).toBeInTheDocument();
    expect(getByText('Button text')).toHaveAttribute('href', 'https://example.com');
    expect(getByAltText('Illustration title')).toBeInTheDocument();
  });

  test('renders with photos prop', () => {
    const { getByText, getByAltText } = render(
      <SplitView
        photos={['https://example.com/photo1.jpg', 'https://example.com/photo2.jpg', 'https://example.com/photo3.jpg']}
        altTitle="Photos title"
        bgColor="primary"
        eyebrow="Eyebrow text"
        title="Title text"
        description="Description text"
        buttonLink="https://example.com"
        buttonText="Button text"
      />,
    );

    expect(getByText('Eyebrow text')).toBeInTheDocument();
    expect(getByText('Title text')).toBeInTheDocument();
    expect(getByText('Description text')).toBeInTheDocument();
    expect(getByText('Button text')).toBeInTheDocument();
    expect(getByText('Button text')).toHaveAttribute('href', 'https://example.com');
    expect(getByAltText('Photos title')).toBeInTheDocument();
    expect(getByAltText('Photos title')).toHaveAttribute('src', 'https://example.com/photo1.jpg');
  });
});
