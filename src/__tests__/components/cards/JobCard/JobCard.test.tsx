import React, { PropsWithChildren } from 'react';
import { render, screen, within } from '@testing-library/react';
import JobCard from '../../../../components/cards/JobCard';

const closeIconAreaLabel = 'Test Info icon aria-lbel';
const infoIconAriaLabel = 'Test Close icon aria-label';

function UlWrapper({ children }: PropsWithChildren) {
  return <ul>{React.Children.only(children)}</ul>;
}

describe('JobCard tests', () => {
  const handleMouseDownClick = jest.fn();

  beforeEach(() => {
    handleMouseDownClick.mockClear();
  });

  it('Renders a job card and checks for the correct location.', async () => {
    render(
      <JobCard
        title="Test title"
        description="Test Description"
        id="1"
        url="www.google.com"
        date={Date.now().toString()}
        enableLogo
        infoIconAriaLabel={infoIconAriaLabel}
        closeIconAriaLabel={closeIconAreaLabel}
        logoAltTagValue="test alt"
        logoSrcTagValue="https://www.randstad-easydrive.de/m/19e8e57574a321fa/original/Logo-Jobborse-GULP.jpeg"
        onMouseDownClick={handleMouseDownClick}
        hasBackground={false}
        viewJobText="View job"
        closeText=""
        location="göteborg kommun, västra götaland"
        salary="sek1,000,000 - sek2,000,000 0"
        jobType="rekrytering"
        enableLocation
        enableSalary
        enableJobType
        activeView="grid"
      />,
      {
        wrapper: UlWrapper,
      },
    );

    const { findByText } = within(screen.getByTestId('location-testId') as HTMLElement);
    expect(await findByText('göteborg kommun, västra götaland')).toBeInTheDocument();
    expect(handleMouseDownClick).not.toHaveBeenCalled();
  });

  it('Renders a job card and checks if the title is correct.', () => {
    render(
      <JobCard
        title="Test title"
        description="Test Description"
        id="1"
        url="www.google.com"
        date={Date.now().toString()}
        enableLogo
        infoIconAriaLabel={infoIconAriaLabel}
        closeIconAriaLabel={closeIconAreaLabel}
        logoAltTagValue="test alt"
        logoSrcTagValue="https://www.randstad-easydrive.de/m/19e8e57574a321fa/original/Logo-Jobborse-GULP.jpeg"
        onMouseDownClick={handleMouseDownClick}
        hasBackground={false}
        viewJobText="View job"
        closeText=""
        location="göteborg kommun, västra götaland"
        salary="sek1,000,000 - sek2,000,000 0"
        jobType="rekrytering"
        enableLocation
        enableSalary
        enableJobType
        activeView="grid"
      />,
      {
        wrapper: UlWrapper,
      },
    );

    const titleMetaDataElement = document.querySelector('.cards__title');
    expect(titleMetaDataElement).toBeInTheDocument();
    expect(handleMouseDownClick).not.toHaveBeenCalled();
  });

  it('Renders a job card and checks if the selected 4th option is present.', async () => {
    render(
      <JobCard
        title="Test title"
        description="Test Description"
        id="1"
        url="www.google.com"
        date={Date.now().toString()}
        enableLogo
        infoIconAriaLabel={infoIconAriaLabel}
        closeIconAriaLabel={closeIconAreaLabel}
        logoAltTagValue="test alt"
        logoSrcTagValue="https://www.randstad-easydrive.de/m/19e8e57574a321fa/original/Logo-Jobborse-GULP.jpeg"
        onMouseDownClick={handleMouseDownClick}
        hasBackground={false}
        viewJobText="View job"
        closeText=""
        location="göteborg kommun, västra götaland"
        salary="sek1,000,000 - sek2,000,000 0"
        jobType="rekrytering"
        enableLocation
        enableSalary
        enableJobType
        fourthOptionField="client_name_settings"
        clientName="randstad"
        activeView="grid"
      />,
      {
        wrapper: UlWrapper,
      },
    );

    const { findByText } = within(screen.getByTestId('fourth-option-client-name-id') as HTMLElement);
    expect(await findByText('randstad')).toBeInTheDocument();
    expect(handleMouseDownClick).not.toHaveBeenCalled();
  });

  it("Renders a job card and checks that the wrong 4th option shouldn't be present.", async () => {
    render(
      <JobCard
        title="Test title"
        description="Test Description"
        id="1"
        url="www.google.com"
        date={Date.now().toString()}
        enableLogo
        infoIconAriaLabel={infoIconAriaLabel}
        closeIconAriaLabel={closeIconAreaLabel}
        logoAltTagValue="test alt"
        logoSrcTagValue="https://www.randstad-easydrive.de/m/19e8e57574a321fa/original/Logo-Jobborse-GULP.jpeg"
        onMouseDownClick={handleMouseDownClick}
        hasBackground={false}
        viewJobText="View job"
        closeText=""
        location="göteborg kommun, västra götaland"
        salary="sek1,000,000 - sek2,000,000 0"
        jobType="rekrytering"
        enableLocation
        enableSalary
        enableJobType
        fourthOptionField="client_name_settings"
        activeView="grid"
      />,
      {
        wrapper: UlWrapper,
      },
    );

    const educationMetaItem = screen.queryByText('bachelor');
    expect(educationMetaItem).not.toBeInTheDocument();
    expect(handleMouseDownClick).not.toHaveBeenCalled();
  });

  it('Changes the 4th option of the job cards to education and it renders successfully.', async () => {
    render(
      <JobCard
        title="Test title"
        description="Test Description"
        id="1"
        url="www.google.com"
        date={Date.now().toString()}
        enableLogo
        infoIconAriaLabel={infoIconAriaLabel}
        closeIconAriaLabel={closeIconAreaLabel}
        logoAltTagValue="test alt"
        logoSrcTagValue="https://www.randstad-easydrive.de/m/19e8e57574a321fa/original/Logo-Jobborse-GULP.jpeg"
        onMouseDownClick={handleMouseDownClick}
        hasBackground={false}
        viewJobText="View job"
        closeText=""
        location="göteborg kommun, västra götaland"
        salary="sek1,000,000 - sek2,000,000 0"
        jobType="rekrytering"
        enableLocation
        enableSalary
        enableJobType
        fourthOptionField="education_settings"
        education="bachelor"
        activeView="grid"
      />,
      {
        wrapper: UlWrapper,
      },
    );

    expect(screen.getByTestId('fourth-option-education-id') as HTMLElement).toBeInTheDocument();
    expect(handleMouseDownClick).not.toHaveBeenCalled();
  });

  it('Checks the job card info icon for the correct aria-label.', async () => {
    render(
      <JobCard
        title="Test title"
        description="Test Description"
        id="1"
        url="www.google.com"
        date={Date.now().toString()}
        enableLogo
        infoIconAriaLabel={infoIconAriaLabel}
        closeIconAriaLabel={closeIconAreaLabel}
        logoAltTagValue="test alt"
        logoSrcTagValue="https://www.randstad-easydrive.de/m/19e8e57574a321fa/original/Logo-Jobborse-GULP.jpeg"
        onMouseDownClick={handleMouseDownClick}
        hasBackground={false}
        viewJobText="View job"
        closeText=""
        location="göteborg kommun, västra götaland"
        salary="sek1,000,000 - sek2,000,000 0"
        jobType="rekrytering"
        enableLocation
        enableSalary
        enableJobType
        fourthOptionField="education_settings"
        education="bachelor"
        activeView="grid"
      />,
      {
        wrapper: UlWrapper,
      },
    );

    expect(screen.getByLabelText(infoIconAriaLabel)).toBeInTheDocument();
    expect(handleMouseDownClick).not.toHaveBeenCalled();
  });

  it('Checks the job card disabled state.', async () => {
    render(
      <JobCard
        title="Test title"
        description="Test Description"
        id="1"
        url="www.google.com"
        date={Date.now().toString()}
        enableLogo
        infoIconAriaLabel={infoIconAriaLabel}
        closeIconAriaLabel={closeIconAreaLabel}
        logoAltTagValue="test alt"
        logoSrcTagValue="https://www.randstad-easydrive.de/m/19e8e57574a321fa/original/Logo-Jobborse-GULP.jpeg"
        onMouseDownClick={handleMouseDownClick}
        hasBackground={false}
        viewJobText="View job"
        closeText=""
        location="göteborg kommun, västra götaland"
        salary="sek1,000,000 - sek2,000,000 0"
        jobType="rekrytering"
        enableLocation
        enableSalary
        enableJobType
        activeView="grid"
        disabled
      />,
      {
        wrapper: UlWrapper,
      },
    );

    const disabledEl = document.querySelector('.cards__item');
    expect(disabledEl).toHaveClass('cards__item--disabled');
    expect(handleMouseDownClick).not.toHaveBeenCalled();
  });

  it('Checks the job card to have Notice.', async () => {
    render(
      <JobCard
        title="Test title"
        description="Test Description"
        id="1"
        url="www.google.com"
        date={Date.now().toString()}
        enableLogo
        infoIconAriaLabel={infoIconAriaLabel}
        closeIconAriaLabel={closeIconAreaLabel}
        logoAltTagValue="test alt"
        logoSrcTagValue="https://www.randstad-easydrive.de/m/19e8e57574a321fa/original/Logo-Jobborse-GULP.jpeg"
        onMouseDownClick={handleMouseDownClick}
        hasBackground={false}
        viewJobText="View job"
        closeText=""
        location="göteborg kommun, västra götaland"
        salary="sek1,000,000 - sek2,000,000 0"
        jobType="rekrytering"
        enableLocation
        enableSalary
        enableJobType
        activeView="grid"
        notice={{
          type: 'negative',
          text: 'This job is not valid.',
        }}
      />,
      {
        wrapper: UlWrapper,
      },
    );

    const noticeEl = document.querySelector('.cards__item .notice-in-page--negative');
    expect(noticeEl).toBeInTheDocument();
    expect(handleMouseDownClick).not.toHaveBeenCalled();
  });
});
