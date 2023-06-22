ContactDetails component with "contact-person" variant
```jsx
  import ContactDetails from "./index.tsx";
 const profiles = [
   {
      name: 'wade ortega',
      initials: 'WO',
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
    },
   {
     name: 'kylie wright',
     initials: 'KW',
     title: 'manager employment',
     description: 'I help you to design solutions that deliver quality candidates into your business.',
     phone: '+1 (954) 308 1362',
     email: 'kylie.wright@randstad.com',
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
   },
   ];
 
  <ContactDetails type="contact-person" title="get in touch" description="We are here to help you with your press questions" profiles={profiles} />
  ```

ContactDetails component with "meet-the-team" variant
  ```jsx
  import ContactDetails from "./index.tsx";
 const profiles = [
   {
      name: 'wade ortega',
      initials: 'WO',
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
    },
   {
     name: 'kylie wright',
     initials: 'KW',
     title: 'manager employment',
     description: 'I help you to design solutions that deliver quality candidates into your business.',
     phone: '+1 (954) 308 1362',
     email: 'kylie.wright@randstad.com',
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
   },
   {
     name: 'kuan-yu',
     initials: 'KY',
     title: 'chief diversity & inclusion officer',
     description: 'I help you to design solutions that deliver quality candidates into your business.',
     phone: '+1 (954) 308 6213',
     email: 'kuan-yu@randstadusa.com',
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
   },
   {
     name: 'peter reiffs',
     initials: 'PR',
     title: 'chief legal officer, randstad north america',
     description: 'I help you to design solutions that deliver quality candidates into your business.',
     phone: '+1 (954) 308 6213',
     email: 'peter.reiffs@randstadusa.com',
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
   },
   ];
  <ContactDetails type="meet-the-team" title="meet the team" description="We are here to help you with your press questions" profiles={profiles} />
  ```