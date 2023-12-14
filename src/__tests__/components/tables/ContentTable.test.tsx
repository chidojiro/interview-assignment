import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentTable from '../../../components/tables/ContentTable';

// Mock your Accordion component
jest.mock('../../../components/accordion/Accordion', () => ({ children }: { children: React.ReactNode }) => <div data-testid="mock-accordion">{children}</div>);
jest.mock('../../../components/accordion/AccordionItem', () => ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div data-testid="mock-accordion-item">
    <div>{title}</div>
    <div>{children}</div>
  </div>
));

describe('ContentTable', () => {
  it('renders table and accordion components correctly', () => {
    const title = 'Table Title';
    const description = 'Table Description';
    const th = ['Header 1', 'Header 2'];
    const tableData = [
      { title: 'Row 1', data: ['Row 1 Data 1', 'Row 1 Data 2'] },
      { title: 'Row 2', data: ['Row 2 Data 1', 'Row 2 Data 2'] },
    ];

    render(<ContentTable title={title} description={description} th={th} tableData={tableData} />);

    // Check if the title and description are rendered
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();

    // Check if the accordion is rendered
    const accordionElement = screen.getByTestId('mock-accordion');
    expect(accordionElement).toBeInTheDocument();

    // Check if accordion items are rendered
    const accordionItemElements = screen.getAllByTestId('mock-accordion-item');
    expect(accordionItemElements).toHaveLength(tableData.length);

    // You can add more specific checks based on your component's structure
  });
});