import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import SavedJobIcon from '../../../../../components/cards/JobCard/SavedJobIcon';
import {
  postSavedJobs,
  deleteSavedJobs,
} from '../../../../../utils/savedJobs/savedJobsHandler';

import getUserData from '../../../../../utils/getUserData';
import searchByJobId from '../../../../../utils/searchApi/searchByJobId';
import getSavedJobsLocalStorage from '../../../../../utils/savedJobs/savedJobsLocalStorage/getSavedJobsLocalStorage';
import saveSavedJobsToLocalStorage from '../../../../../utils/savedJobs/savedJobsLocalStorage/saveSavedJobsLocalStorage';
import { CustomWindow } from '../../../../../utils/gtm/types';

import Mock = jest.Mock;

// Mock the functions used in the component
jest.mock('../../../../../utils/savedJobs/savedJobsHandler', () => ({
  postSavedJobs: jest.fn(),
  deleteSavedJobs: jest.fn(),
  handleAnonymousSavedJobs: jest.requireActual('../../../../../utils/savedJobs/savedJobsHandler').handleAnonymousSavedJobs,
}));

jest.mock('../../../../../utils/searchApi/searchByJobId');
jest.mock('../../../../../utils/savedJobs/savedJobsLocalStorage/getSavedJobsLocalStorage');
jest.mock('../../../../../utils/savedJobs/savedJobsLocalStorage/saveSavedJobsLocalStorage');

// Mock the Icon component
jest.mock('../../../../../components/common/Icon', () => ({
  __esModule: true,
  default: () => <span>MockIcon</span>,
}));

jest.mock('../../../../../utils/getUserData');

const commonProps = {
  searchApiUrl: 'https://exmaple.com/api/search',
  searchApiKey: '1234',
  size: 'l',
  gdsApiKey: '12345',
  gdsApiUrl: 'https://example.com/api',
  jobPostingWebDetailId: 'def456',
  ariaLabel: 'Save Job',
  locale: 'en',
  title: 'Test Job',
};

const dummySavedJobId = 'abc123';

describe('SavedJobIcon component tests', () => {
  beforeEach(() => {
    (window as unknown as CustomWindow).dataLayer = [];
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete (window as unknown as { dataLayer?: string[] }).dataLayer;
  });

  it('renders the component with the filled icon if savedJobId is provided', () => {
    const { container } = render(
      <SavedJobIcon {...commonProps} savedJobId={dummySavedJobId} />,
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
      <SavedJobIcon {...commonProps} />,
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

  it('should save to the unauthorized user flow in case of logged out user', async () => {
    (getUserData as Mock).mockImplementation(() => ({ loginStatus: false }));
    (searchByJobId as Mock).mockResolvedValue({
      workLocationAddress: {
        locality: 'dummy',
      },
      jobTitle: 'dummy',
      id: '123',
      description: {
        description: 'dummy description',
      },
      jobInformation: {
        jobType: 'dummy type',
      },
      postingDetail: {
        postingTime: '2023-06-27T07:23:09.246165299Z',
      },
    });

    const { container } = render(
      <SavedJobIcon
        {...commonProps}
      />,
    );

    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(button as HTMLButtonElement);
    });

    expect(getUserData).toHaveBeenCalled();
    expect(searchByJobId).toHaveBeenCalled();
    expect(getSavedJobsLocalStorage).toHaveBeenCalled();
    expect(saveSavedJobsToLocalStorage).toHaveBeenCalled();
    expect((window as unknown as CustomWindow).dataLayer).toEqual([{ event_params: null }, { event: 'interaction', event_params: { action: 'add', event_name: 'job_save', item_name: 'Test Job' } }]);
  });

  it('calls postSavedJobs when savedJobId is not provided and the button is clicked, for logged in users.', async () => {
    (getUserData as Mock).mockImplementation(() => ({ loginStatus: true }));
    const { container } = render(
      <SavedJobIcon
        {...commonProps}
      />,
    );

    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(button as HTMLButtonElement);
    });

    expect(postSavedJobs).toHaveBeenCalledTimes(1);
    expect(postSavedJobs).toHaveBeenCalledWith('12345', 'https://example.com/api', 'def456');
    expect((window as unknown as CustomWindow).dataLayer).toEqual([{ event_params: null }, { event: 'interaction', event_params: { action: 'add', event_name: 'job_save', item_name: 'Test Job' } }]);
  });

  test('calls deleteSavedJobs and returnJobPostingDetails when savedJobId is provided and the button is clicked', () => {
    (getUserData as Mock).mockImplementation(() => ({ loginStatus: true }));
    const { container } = render(
      <SavedJobIcon
        {...commonProps}
        savedJobId={dummySavedJobId}
        returnJobPostingDetails={() => {
        }}
      />,
    );

    const button = container.querySelector('button');
    fireEvent.click(button as HTMLButtonElement);

    expect(deleteSavedJobs).toHaveBeenCalledTimes(1);
    expect(deleteSavedJobs).toHaveBeenCalledWith('12345', 'https://example.com/api', 'abc123');
  });
});
