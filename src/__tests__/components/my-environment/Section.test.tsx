import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Section from '../../../components/my-environment/Section';

jest.mock('../../../components/common/Icon', () => ({
  __esModule: true,
  default: () => <span>MockIcon</span>,
}));

describe('Section component tests', () => {
  it('renders the component with title and description', () => {
    const { container, getByText } = render(
      <Section
        id="my-section"
        title="My Section"
        description="Section description"
      >
        <div>Section content</div>
      </Section>,
    );

    const sectionElement = container.querySelector('#my-section');
    expect(sectionElement).toBeInTheDocument();

    const titleElement = getByText('My Section');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = getByText('Section description');
    expect(descriptionElement).toBeInTheDocument();

    const contentElement = container.querySelector('div');
    expect(contentElement).toHaveTextContent('Section content');
  });

  it('renders the component without description', () => {
    const { container, getByText, queryByText } = render(
      <Section
        id="my-section"
        title="My Section"
      >
        <div>Section content</div>
      </Section>,
    );

    const sectionElement = container.querySelector('#my-section');
    expect(sectionElement).toBeInTheDocument();

    const titleElement = getByText('My Section');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = queryByText('Section description');
    expect(descriptionElement).toBeNull();

    const contentElement = container.querySelector('div');
    expect(contentElement).toHaveTextContent('Section content');
  });

  it('renders the component with edit button', () => {
    const handleEdit = jest.fn();

    const { container, getByText } = render(
      <Section
        id="my-section"
        title="My Section"
        handleEdit={handleEdit}
        label="Edit"
      >
        <div>Section content</div>
      </Section>,
    );

    const sectionElement = container.querySelector('#my-section');
    expect(sectionElement).toBeInTheDocument();

    const editButton = getByText('Edit');
    expect(editButton).toBeInTheDocument();
    expect(editButton.parentElement).toHaveAttribute('data-label', 'Edit');

    fireEvent.click(editButton);
    expect(handleEdit).toHaveBeenCalledTimes(1);
  });

  it('renders the component with delete button', () => {
    const handleDelete = jest.fn();

    const { container, getByText } = render(
      <Section
        id="my-section"
        title="My Section"
        handleDelete={handleDelete}
        label="Delete"
      >
        <div>Section content</div>
      </Section>,
    );

    const sectionElement = container.querySelector('#my-section');
    expect(sectionElement).toBeInTheDocument();

    const deleteButton = getByText('Delete');
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton.parentElement).toHaveAttribute('data-label', 'Delete');

    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it('renders the component with add item button', () => {
    const handleAddItem = jest.fn();

    const { container, getByText } = render(
      <Section
        id="my-section"
        title="My Section"
        handleAddItem={handleAddItem}
        label="Add Item"
      >
        <div>Section content</div>
      </Section>,
    );

    const sectionElement = container.querySelector('#my-section');
    expect(sectionElement).toBeInTheDocument();

    const addItemButton = getByText('Add Item');
    expect(addItemButton).toBeInTheDocument();

    fireEvent.click(addItemButton);
    expect(handleAddItem).toHaveBeenCalledTimes(1);
  });

  it('should render the section action header container with provided actionHeaderStyles', () => {
    const { container } = render(
      <Section id="my-section" title="My Section" actionHeaderStyles="custom-styles">
        <div>Content</div>
      </Section>,
    );

    const titleElement = container.querySelector('#my-section');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement?.firstChild).toHaveClass('custom-styles');
  });
});
