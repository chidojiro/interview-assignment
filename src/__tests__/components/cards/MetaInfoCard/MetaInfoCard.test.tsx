import React from 'react';
import { render } from '@testing-library/react';
import MetaInfoCard from '../../../../components/cards/MetaInfoCard';

describe('MetaInfoCard', () => {
  const children = <span>Test Children</span>;

  it('Renders the title correctly', () => {
    const title = 'Test Title';
    const { getByText } = render(<MetaInfoCard title={title}>{children}</MetaInfoCard>);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('Applies a custom title color', () => {
    const titleColor = 'primary';
    const { container } = render(<MetaInfoCard title="Test Title" titleColor={titleColor}>{children}</MetaInfoCard>);
    expect(container.firstChild?.firstChild).toHaveClass(`text-brand-${titleColor}`);
  });

  it('Renders the children correctly', () => {
    const { getByText } = render(<MetaInfoCard>{children}</MetaInfoCard>);
    const childrenElement = getByText('Test Children');
    expect(childrenElement).toBeInTheDocument();
  });

  it('Applies a custom background color', () => {
    const bgColor = 'primary';
    const { container } = render(<MetaInfoCard bgColor={bgColor}>{children}</MetaInfoCard>);
    expect(container.firstChild).toHaveClass('bg-variant-brand-primary');
  });

  it('Applies the default background color when none is provided', () => {
    const { container } = render(<MetaInfoCard>{children}</MetaInfoCard>);
    expect(container.firstChild).toHaveClass('bg-variant-brand-tertiary');
  });

  it('Check if default class is present', () => {
    const { container } = render(<MetaInfoCard>{children}</MetaInfoCard>);
    expect(container.firstChild).toHaveClass('meta-content');
  });
});
