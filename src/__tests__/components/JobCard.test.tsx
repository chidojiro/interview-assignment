import React from 'react';
import { render, screen } from '@testing-library/react';
import JobCard from '../../components/JobCard/JobCard';
import Icon from '../../components/Icon';
import { within } from '@testing-library/dom'

const closeIconAreaLabel = "Test Info icon aria-lbel";
const infoIconAriaLabel = "Test Close icon aria-label"

const cardLogo = (
  <div className={`cards__logo`}>
    <img className="cards__logo-image" alt={"Test title"}
      src="https://www.randstad.com/themes/custom/bluex/src/assets/img/logo-bluex.png"
    />
  </div>
)

describe("JobCard tests", () => {

  it("Renders a job card and checks for the correct location.", async () => {
    render(<JobCard
      title="Test title"
      description="Test Description"
      id="1"
      url="www.google.com"
      date={Date.now().toString()}
      logo={cardLogo}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIconAriaLabel={infoIconAriaLabel}
      closeIconAriaLabel={closeIconAreaLabel}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
      hasBackground={false}
      activeView={"grid"}
      viewJobText="View job"
      closeText=""
      location="göteborg kommun, västra götaland"
      salary="sek1,000,000 - sek2,000,000 0"
      jobType="rekrytering"
      enableLocation={true}
      enableSalary={true}
      enableJobType={true}
    
    />);

    const { findByText } = within(screen.getByTestId("location-testId") as HTMLElement)
    expect(await findByText('göteborg kommun, västra götaland')).toBeInTheDocument()
  })

  it("Renders a job card and checks if the title is correct.", () => {
    render(<JobCard
      title="Test title"
      description="Test Description"
      id="1"
      url="www.google.com"
      date={Date.now().toString()}
      logo={cardLogo}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIconAriaLabel={infoIconAriaLabel}
      closeIconAriaLabel={closeIconAreaLabel}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
      hasBackground={false}
      activeView={"grid"}
      viewJobText="View job"
      closeText=""
      location="göteborg kommun, västra götaland"
      salary="sek1,000,000 - sek2,000,000 0"
      jobType="rekrytering"
      enableLocation={true}
      enableSalary={true}
      enableJobType={true}
    
    />);

    const titleMetaDataElement = document.querySelector('.cards__title');
    expect(titleMetaDataElement).toBeInTheDocument();
  })

  it("Renders a job card and checks if the selected 4th option is present.", async () => {
    render(<JobCard
      title="Test title"
      description="Test Description"
      id="1"
      url="www.google.com"
      date={Date.now().toString()}
      logo={cardLogo}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIconAriaLabel={infoIconAriaLabel}
      closeIconAriaLabel={closeIconAreaLabel}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
      hasBackground={false}
      activeView={"grid"}
      viewJobText="View job"
      closeText=""
      location="göteborg kommun, västra götaland"
      salary="sek1,000,000 - sek2,000,000 0"
      jobType="rekrytering"
      enableLocation={true}
      enableSalary={true}
      enableJobType={true}
      fourthOptionField="client_name_settings"
      clientName="randstad"
    />);

    const { findByText } = within(screen.getByTestId("fourth-option-client-name-id") as HTMLElement)
    expect(await findByText('randstad')).toBeInTheDocument()
  })

  it("Renders a job card and checks that the wrong 4th option shouldn't be present.", async () => {
    render(<JobCard
      title="Test title"
      description="Test Description"
      id="1"
      url="www.google.com"
      date={Date.now().toString()}
      logo={cardLogo}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIconAriaLabel={infoIconAriaLabel}
      closeIconAriaLabel={closeIconAreaLabel}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
      hasBackground={false}
      activeView={"grid"}
      viewJobText="View job"
      closeText=""
      location="göteborg kommun, västra götaland"
      salary="sek1,000,000 - sek2,000,000 0"
      jobType="rekrytering"
      enableLocation={true}
      enableSalary={true}
      enableJobType={true}
      fourthOptionField="client_name_settings"
    
    />);

    const educationMetaItem = screen.queryByText('bachelor')
    expect(educationMetaItem).not.toBeInTheDocument()
  })

  it("Changes the 4th option of the job cards to education and it renders successfully.", async () => {

    render(<JobCard
      title="Test title"
      description="Test Description"
      id="1"
      url="www.google.com"
      date={Date.now().toString()}
      logo={cardLogo}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIconAriaLabel={infoIconAriaLabel}
      closeIconAriaLabel={closeIconAreaLabel}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
      hasBackground={false}
      activeView={"grid"}
      viewJobText="View job"
      closeText=""
      location="göteborg kommun, västra götaland"
      salary="sek1,000,000 - sek2,000,000 0"
      jobType="rekrytering"
      enableLocation={true}
      enableSalary={true}
      enableJobType={true}
      fourthOptionField="education_settings"
      education="bachelor"
    />);

    expect(screen.getByTestId("fourth-option-education-id") as HTMLElement).toBeInTheDocument();
  })

  it("Checks the job card info icon for the correct aria-label.", async () => {

    render(<JobCard
      title="Test title"
      description="Test Description"
      id="1"
      url="www.google.com"
      date={Date.now().toString()}
      logo={cardLogo}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIconAriaLabel={infoIconAriaLabel}
      closeIconAriaLabel={closeIconAreaLabel}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
      hasBackground={false}
      activeView={"grid"}
      viewJobText="View job"
      closeText=""
      location="göteborg kommun, västra götaland"
      salary="sek1,000,000 - sek2,000,000 0"
      jobType="rekrytering"
      enableLocation={true}
      enableSalary={true}
      enableJobType={true}
      fourthOptionField="education_settings"
      education="bachelor"
    />);

    expect(screen.getByLabelText(infoIconAriaLabel)).toBeInTheDocument();
  })
});