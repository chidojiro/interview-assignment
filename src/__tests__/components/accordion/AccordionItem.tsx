import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AccordionItem from '../../../components/accordion/AccordionItem';

const dataRsCollapsibleContentAttr = 'data-rs-collapsible-content';

describe('AccordionItem', () => {
  const title = 'Accordion Item Title';
  const subtitle = 'Accordion Item Subtitle';
  const ariaLabel = 'aria-label';
  const content = 'Accordion Item Content';

  it('renders the title and subtitle', () => {
    render(
      <AccordionItem title={title} subtitle={subtitle}>
        {content}
      </AccordionItem>,
    );

    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subtitle);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders the content when expanded', () => {
    render(<AccordionItem title={title} ariaLabel={ariaLabel} expanded>{content}</AccordionItem>);

    const contentElement = screen.getByText(content);

    expect(contentElement?.parentElement).toHaveAttribute('aria-hidden', 'false');
    expect(contentElement?.parentElement).toHaveAttribute(dataRsCollapsibleContentAttr, 'expanded');
  });

  it('does not render the content when not expanded', () => {
    const { queryByText } = render(<AccordionItem title={title} ariaLabel={ariaLabel}>{content}</AccordionItem>);

    const contentElement = queryByText(content);

    expect(contentElement?.parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(contentElement?.parentElement).not.toHaveAttribute(dataRsCollapsibleContentAttr, 'expanded');
  });

  it('should expand when clicked', async () => {
    const { getByLabelText, getByText, container } = render(<AccordionItem title={title} ariaLabel={ariaLabel}>{content}</AccordionItem>);

    const wrapper = getByLabelText(ariaLabel);
    const contentElement = getByText(content);
    const trigger = container.getElementsByClassName('collapsible__trigger')[0];

    expect(trigger).toBeInTheDocument();
    expect(wrapper).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();

    expect(trigger).not.toHaveClass('collapsible__trigger--expanded');
    expect(contentElement.parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(contentElement.parentElement).not.toHaveAttribute('aria-expanded', 'true');
    expect(contentElement.parentElement).not.toHaveAttribute(dataRsCollapsibleContentAttr, 'expanded');

    // Click to expand
    fireEvent.click(trigger);

    expect(trigger).toHaveClass('collapsible__trigger--expanded');
    expect(contentElement.parentElement).toHaveAttribute('aria-expanded', 'true');
    expect(contentElement.parentElement).toHaveAttribute(dataRsCollapsibleContentAttr, 'expanded');

    // Click to collapse again
    fireEvent.click(trigger);

    expect(trigger).not.toHaveClass('collapsible__trigger--expanded');
    expect(contentElement.parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(contentElement.parentElement).toHaveAttribute('aria-expanded', 'false');
    expect(contentElement.parentElement).not.toHaveAttribute(dataRsCollapsibleContentAttr, 'expanded');
  });
});
