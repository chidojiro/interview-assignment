import React from 'react';
import { render, screen, within } from '@testing-library/react';
import JobCard from '../../../components/cards/JobCard';

const closeIconAreaLabel = 'Test Info icon aria-lbel';
const infoIconAriaLabel = 'Test Close icon aria-label';

describe('JobCard tests', () => {
  it('Renders a job card and checks for the correct location.', async () => {
    render(<JobCard
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
      onMouseDownClick={() => console.log('mouseClick event')}
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

    />);

    const { findByText } = within(screen.getByTestId('location-testId') as HTMLElement);
    expect(await findByText('göteborg kommun, västra götaland')).toBeInTheDocument();
  });

  it('Renders a job card and checks if the title is correct.', () => {
    render(<JobCard
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
      onMouseDownClick={() => console.log('mouseClick event')}
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
    />);

    const titleMetaDataElement = document.querySelector('.cards__title');
    expect(titleMetaDataElement).toBeInTheDocument();
  });

  it('Renders a job card and checks if the selected 4th option is present.', async () => {
    render(<JobCard
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
      onMouseDownClick={() => console.log('mouseClick event')}
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
    />);

    const { findByText } = within(screen.getByTestId('fourth-option-client-name-id') as HTMLElement);
    expect(await findByText('randstad')).toBeInTheDocument();
  });

  it("Renders a job card and checks that the wrong 4th option shouldn't be present.", async () => {
    render(<JobCard
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
      onMouseDownClick={() => console.log('mouseClick event')}
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

    />);

    const educationMetaItem = screen.queryByText('bachelor');
    expect(educationMetaItem).not.toBeInTheDocument();
  });

  it('Changes the 4th option of the job cards to education and it renders successfully.', async () => {
    render(<JobCard
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
      onMouseDownClick={() => console.log('mouseClick event')}
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
    />);

    expect(screen.getByTestId('fourth-option-education-id') as HTMLElement).toBeInTheDocument();
  });

  it('Checks the job card info icon for the correct aria-label.', async () => {
    render(<JobCard
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
      onMouseDownClick={() => console.log('mouseClick event')}
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
    />);

    expect(screen.getByLabelText(infoIconAriaLabel)).toBeInTheDocument();
  });
});
