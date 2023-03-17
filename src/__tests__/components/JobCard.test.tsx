import React from 'react';
import { render, screen } from '@testing-library/react';
import JobCard from '../../components/JobCard/JobCard';
import JobItemMetadata from '../../components/JobCard/JobItemMetadata';
import Icon from '../../components/Icon';
import { within } from '@testing-library/dom'
import { fourthOptionSettingsField } from '../../components/JobCard/JobItemMetadata';
import { settingsFields } from '../../components/JobCard/JobItemMetadata';

const closeIconProps = {
  "aria-label": ""
}
const infoIconProps = {
  "aria-label": ""
}

const settings: {
  location: settingsFields;
  jobType: settingsFields;
  salary: settingsFields;
  fourthOption: fourthOptionSettingsField;
} = {
  location: {
    checked: true,
  },
  jobType: {
    checked: true,
  },
  salary: {
    checked: true,
  },
  fourthOption: {
    field: "client_name_settings",
    ariaLabel: ""
  }
}

let JobCardListingSettings: {
  background: boolean;
  active: "grid" | "list";
  viewJobText: string;
  closeText: string;
} = {
  background: false,
  active: "grid",
  viewJobText: "show job details",
  closeText: "",
}

const cardLogo = (
  <div className={`cards__logo`}>
    <img className="cards__logo-image" alt={"Test title"}
      src="https://www.randstad.com/themes/custom/bluex/src/assets/img/logo-bluex.png"
    />
  </div>
)

describe("JobCard tests", () => {
  const metaDataFields = {
    location: "cambridgeshire, east of england",
    salary: "£20.00 - £24.00 per hour",
    clientName: "randstad",
    workHours: "full-time",
    education: "bachelor",
    duration: "12 months",
    divison: "randstad korea",
    sector: "Sector",
    jobType: "temporary"
  }

  it("Renders a job card and checks for the correct location.", async () => {
    render(<JobCard
      title="Test title"
      description="Test Description"
      id="1"
      url="www.google.com"
      meta={<JobItemMetadata metaDataFields={metaDataFields} settings={settings} />}
      date={Date.now().toString()}
      logo={cardLogo}
      settings={JobCardListingSettings}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIcon={infoIconProps}
      closeIcon={closeIconProps}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
    />);

    const { findByText } = within(screen.getByTestId("location-testId") as HTMLElement)
    expect(await findByText('cambridgeshire, east of england')).toBeInTheDocument()
  })

  it("Renders a job card and checks if the title is correct.", () => {
    render(<JobCard
      title="Test title"
      description="Test Description"
      id="1"
      url="www.google.com"
      meta={<JobItemMetadata metaDataFields={metaDataFields} settings={settings} />}
      date={Date.now().toString()}
      logo={cardLogo}
      settings={JobCardListingSettings}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIcon={infoIconProps}
      closeIcon={closeIconProps}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
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
      meta={<JobItemMetadata metaDataFields={metaDataFields} settings={settings} />}
      date={Date.now().toString()}
      logo={cardLogo}
      settings={JobCardListingSettings}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIcon={infoIconProps}
      closeIcon={closeIconProps}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
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
      meta={<JobItemMetadata metaDataFields={metaDataFields} settings={settings} />}
      date={Date.now().toString()}
      logo={cardLogo}
      settings={JobCardListingSettings}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIcon={infoIconProps}
      closeIcon={closeIconProps}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
    />);

    const educationMetaItem = screen.queryByText('bachelor')
    expect(educationMetaItem).not.toBeInTheDocument()
  })

  it("Changes the 4th option of the job cards to education and it renders successfully.", async () => {
    settings.fourthOption.field = "education_settings"

    render(<JobCard
      title="Test title"
      description="Test Description"
      id="1"
      url="www.google.com"
      meta={<JobItemMetadata metaDataFields={metaDataFields} settings={settings} />}
      date={Date.now().toString()}
      logo={cardLogo}
      settings={JobCardListingSettings}
      favoriteIcon={<Icon iconType='heart-filled-30' />}
      infoIcon={infoIconProps}
      closeIcon={closeIconProps}
      infoIconClick={() => console.log("Info icon clicked, add dataLayer event in this place in the future.")}
      onMouseDownClick={() => console.log("mouseClick event")}
    />);

    expect(screen.getByTestId("fourth-option-education-id") as HTMLElement).toBeInTheDocument();
  })
});