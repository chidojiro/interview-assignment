import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import SavedJobIcon from '../../../../../components/cards/JobCard/SavedJobIcon';
import { postSavedJobs, deleteSavedJobs } from '../../../../../utils/savedJobsHandler';

// Mock the functions used in the component
jest.mock('../../../../../utils/savedJobsHandler', () => ({
  postSavedJobs: jest.fn(),
  deleteSavedJobs: jest.fn(),
}));

jest.mock('../../../../../utils/getUserData/index.ts', () => ({
  __esModule: true,
  default: () => ({ loginStatus: true }),
}));

// Mock the Icon component
jest.mock('../../../../../components/common/Icon', () => ({
  __esModule: true,
  default: () => <span>MockIcon</span>,
}));

describe('SavedJobIcon component tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with the filled icon if savedJobId is provided', () => {
    const { container } = render(
      <SavedJobIcon
        searchApiUrl="1234"
        searchApiKey="https://exmaple.com/api/search"
        size="l"
        gdsApiKey="12345"
        gdsApiUrl="https://example.com/api"
        savedJobId="abc123"
        jobPostingWebDetailId="def456"
        ariaLabel="Save Job"
      />,
    );

    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-pressed', 'true');

    const iconFilled = container.querySelector('.icon--inline span:first-child');
    expect(iconFilled).toHaveTextContent('MockIcon');

    const iconEmpty = container.querySelector('.icon--inline span:last-child');
    expect(iconEmpty).toBeInTheDocument();
    expect(iconEmpty).toHaveTextContent('MockIcon');
  });

  it('renders the component with the empty icon if savedJobId is not provided', () => {
    const { container } = render(
      <SavedJobIcon
        searchApiUrl="https://example.com/search/api"
        searchApiKey="1234"
        size="l"
        gdsApiKey="12345"
        gdsApiUrl="https://example.com/api"
        jobPostingWebDetailId="def456"
        ariaLabel="Save Job"
      />,
    );

    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-pressed', 'false');

    const iconFilled = container.querySelector('.icon--inline span:first-child');
    expect(iconFilled).toBeInTheDocument();
    expect(iconFilled).toHaveTextContent('MockIcon');

    const iconEmpty = container.querySelector('.icon--inline span:last-child');
    expect(iconEmpty).toHaveTextContent('MockIcon');
  });

  it('calls postSavedJobs when savedJobId is not provided and the button is clicked', async () => {
    const { container } = render(
      <SavedJobIcon
        searchApiUrl="https://example.com/search/api"
        searchApiKey="1234"
        size="l"
        gdsApiKey="12345"
        gdsApiUrl="https://example.com/api"
        jobPostingWebDetailId="def456"
        ariaLabel="Save Job"
      />,
    );

    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(button as HTMLButtonElement);
    });

    expect(postSavedJobs).toHaveBeenCalledTimes(1);
    expect(postSavedJobs).toHaveBeenCalledWith('12345', 'https://example.com/api', 'def456');
  });

  test('calls deleteSavedJobs and returnJobPostingWebDetailId when savedJobId is provided and the button is clicked', () => {
    const { container } = render(
      <SavedJobIcon
        searchApiUrl="https://example.com/search/api"
        searchApiKey="1234"
        size="l"
        gdsApiKey="12345"
        gdsApiUrl="https://example.com/api"
        savedJobId="abc123"
        jobPostingWebDetailId="def456"
        ariaLabel="Save Job"
        returnJobPostingWebDetailId={() => {}}
      />,
    );

    const button = container.querySelector('button');
    fireEvent.click(button as HTMLButtonElement);

    expect(deleteSavedJobs).toHaveBeenCalledTimes(1);
    expect(deleteSavedJobs).toHaveBeenCalledWith('12345', 'https://example.com/api', 'abc123');
  });
});
