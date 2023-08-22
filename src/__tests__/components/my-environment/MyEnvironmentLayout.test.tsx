import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyEnvironmentLayout from '../../../components/my-environment/MyEnvironmentLayout';

jest.mock('../../../components/common/Icon', () => ({
  __esModule: true,
  default: () => <span>MockIcon</span>,
}));

describe('MyEnvironmentLayout component tests', () => {
  it('renders the component with title and description', () => {
    const { getByText } = render(
      <MyEnvironmentLayout
        title="My Environment"
        description="Environment description"
      >
        <div>Environment content</div>
      </MyEnvironmentLayout>,
    );

    const titleElement = getByText('My Environment');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = getByText('Environment description');
    expect(descriptionElement).toBeInTheDocument();

    const contentElement = getByText('Environment content');
    expect(contentElement).toBeInTheDocument();
  });

  it('renders the component without description', () => {
    const { getByText, queryByText } = render(
      <MyEnvironmentLayout
        title="My Environment"
      >
        <div>Environment content</div>
      </MyEnvironmentLayout>,
    );

    const titleElement = getByText('My Environment');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = queryByText('Environment description');
    expect(descriptionElement).toBeNull();

    const contentElement = getByText('Environment content');
    expect(contentElement).toBeInTheDocument();
  });

  it('renders the component with add item link', () => {
    const handleAddItem = jest.fn();

    const { getByText } = render(
      <MyEnvironmentLayout
        title="My Environment"
        handleAddItem={handleAddItem}
        label="Add Item"
      >
        <div>Environment content</div>
      </MyEnvironmentLayout>,
    );

    const addItemLink = getByText('Add Item');
    expect(addItemLink).toBeInTheDocument();

    fireEvent.click(addItemLink);
    expect(handleAddItem).toHaveBeenCalledTimes(1);
  });

  it('renders the component with passed href as a property', () => {
    const handleAddItem = jest.fn();

    const { getByText } = render(
      <MyEnvironmentLayout
        title="My Environment"
        label="Add Item"
        href="some-website-address"
        handleAddItem={handleAddItem}
      >
        <div>Environment content</div>
      </MyEnvironmentLayout>,
    );

    const addItemLink = getByText('Add Item');
    expect(addItemLink).toBeInTheDocument();
    expect(addItemLink).toHaveAttribute('href', 'some-website-address');
  });
});
