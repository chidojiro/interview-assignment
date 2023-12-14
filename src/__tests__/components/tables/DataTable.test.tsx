import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from '../../../components/tables/DataTable';

// Mock your Accordion component
jest.mock('../../../components/accordion/Accordion', () => ({ children }: { children: React.ReactNode }) => <div data-testid="mock-accordion">{children}</div>);
jest.mock('../../../components/accordion/AccordionItem', () => ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div data-testid="mock-accordion-item">
    <div>{title}</div>
    <div>{children}</div>
  </div>
));

describe('DataTable', () => {
  it('renders table and accordion components correctly', () => {
    const th = ['Header 1', 'Header 2'];
    const tableData = [
      { data: ['Row 1 Data 1', 'Row 1 Data 2'] },
      { data: ['Row 2 Data 1', 'Row 2 Data 2'] },
    ];

    render(<DataTable th={th} tableData={tableData} />);

    // Check if the table is rendered
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();

    // Check if the accordion is rendered
    const accordionElement = screen.getByTestId('mock-accordion');
    expect(accordionElement).toBeInTheDocument();

    // Check if accordion items are rendered
    const accordionItemElements = screen.getAllByTestId('mock-accordion-item');
    expect(accordionItemElements).toHaveLength(tableData.length);
  });
});