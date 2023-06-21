  ```jsx
  import PersonProfile from "./index.tsx";

  const person = {
        name: 'John Doe',
        initials: 'JD',
        title: 'manager outsourcing',
        description: 'I am here to support the resource management needs of your business by applying our outsourcing solutions.',
        phone: '+1 (954) 308 6213',
        email: 'wade.ortega@randstad.com',
        socialLinks: [
          {
            url: '#',
            title: 'linkedin',
            icon: 'linkedin-filled-30',
          },
          {
            url: '#',
            title: 'twitter',
            icon: 'twitter-filled-30',
          },
          {
            url: '#',
            title: 'facebook',
            icon: 'facebook-filled-30',
          },
          {
            url: '#',
            title: 'youtube',
            icon: 'youtube-filled-30',
          },
          {
            url: '#',
            title: 'instagram',
            icon: 'instagram-filled-30',
          }
        ]
      };
    
  <PersonProfile person={person} avatarClasses="mb-s" />
  ```