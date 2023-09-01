  This component will be deprecated. Currently in use in Jobs app. To be replaced with ContactDetails.
  ```jsx
  import ContactPerson from "./index.tsx"
  const props = {
    displayId: '123',
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet',
    jobTitle: 'Software Engineer',
    emailAddress: 'john.doe@example.com',
    phoneNumber: '+123456789',
    photo: '/img/wade-ortega.jpeg',
    regionCode: 'US',
    useLowerCase: true,
    overrides: {
      Override: '',
      Name: '',
      Description: '',
      JobTitle: '',
      Email: '',
      Phone: '',
      PhotoUrl: '',
    },
    settings: {
      showPhone: true,
      showTitle: true,
      showEmail: true,
      showBiography: true,
      showOfficeOrBranch: true,
      officeIcon: 'building',
    },
    translations: {
      title: 'Contact Information',
      description: 'Please find the contact details below:',
      emailTheConsultant: 'Email the consultant',
      randstadConsultant: 'Randstad Consultant',
    },
    branchData: {
      title: 'Branch Office',
      url: 'https://example.com/office',
    },
    dataLayerEmailClick: 'handleEmailClick',
  };

  <ContactPerson {...props}/>
  ```