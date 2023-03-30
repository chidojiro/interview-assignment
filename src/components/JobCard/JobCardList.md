JobCardList with Carousel on mobile.

```jsx
import { JobCardList, JobCard } from "@ffw/randstad-shared-components";
import Icon from '../Icon';

<JobCardList isSlider={true}>
  <JobCard
  description="descriptif du posteSous la responsabilité d'un chef d'équipe, vos missions seront les suivantes:- La sécurisation de votre poste- Réaliser la pose de planchers et de rails (mise en place de scotch et de joints)- Effectuer la pose de luminaires provisoires- Mise en place de protections sur parois- Exécuter les opérations de nettoyage de votre poste de travail- Retirer des copeaux par système d'aspiration- Passer la soufflette à air compriméHoraires 2X8, sal"
  id="Job card id"
  url="Url to the job details page"
  date="posted 22 march 2023"
  enableLogo={true}
  favoriteJobsEnabled={true}
  favorited={false}
  logoAltTagValue="logo alt text"
  logoSrcTagValue="https://bynder-public.s3.amazonaws.com/media/6EF965C8-0E83-47D9-ABF1A5C7AC6D092A/0/B591E16A-8CC3-4F5D-ABC89781EFC13D7A/webimage-333390C9-7283-44B4-83FDFA1C921A763C.png"
  infoIconAriaLabel="Info icon aria label"
  closeIconAriaLabel="Close icon aria label"
  onMouseDownClick={() => {console.log("eval(jobData.dataLayerJobClick)")}}
  hasBackground={false}
  viewJobText="show job details"
  closeText=""
  location="Sylt, Schleswig-Holstein"
  salary="£45 per year, Plus expenses"
  clientName="Randstad korea"
  workHours="full-time"
  education="BA in social work"
  duration="unbefristet"
  division="Randstad division"
  sector="Marketing und Vertrieb"
  jobType="Temporary"
  locationIcon="marker"
  salaryIcon="salary"
  jobTypeIcon="briefcase"
  locationIconAttributes={{"aria-label": "location icon aria-label"}}
  salaryIconAttributes={{"aria-label": "hello salary icon aria-label"}}
  jobTypeIconAttributes={{"aria-label": "jobType icon aria label"}}
  enableLocation={true}
  enableSalary={true}
  enableJobType={true}
  fourthOptionField="client_name_settings"
  fourthOptionIcon="factory"
  fourthOptionAriaLabelValue="Fourth option aria-label"
  lowerCased={false}
  activeView="grid"
/>
  <JobCard
    description="descriptif du posteSous la responsabilité d'un chef d'équipe, vos missions seront les suivantes:- La sécurisation de votre poste- Réaliser la pose de planchers et de rails (mise en place de scotch et de joints)- Effectuer la pose de luminaires provisoires- Mise en place de protections sur parois- Exécuter les opérations de nettoyage de votre poste de travail- Retirer des copeaux par système d'aspiration- Passer la soufflette à air compriméHoraires 2X8, sal"
    id="Job card id"
    url="Url to the job details page"
    date="posted 22 march 2023"
    enableLogo={true}
    favoriteJobsEnabled={true}
    favorited={false}
    logoAltTagValue="logo alt text"
    logoSrcTagValue="https://bynder-public.s3.amazonaws.com/media/6EF965C8-0E83-47D9-ABF1A5C7AC6D092A/0/B591E16A-8CC3-4F5D-ABC89781EFC13D7A/webimage-333390C9-7283-44B4-83FDFA1C921A763C.png"
    infoIconAriaLabel="Info icon aria label"
    closeIconAriaLabel="Close icon aria label"
    onMouseDownClick={() => {console.log("eval(jobData.dataLayerJobClick)")}}
    hasBackground={false}
    viewJobText="show job details"
    closeText=""
    location="Sylt, Schleswig-Holstein"
    salary="£45 per year, Plus expenses"
    clientName="Randstad korea"
    workHours="full-time"
    education="BA in social work"
    duration="unbefristet"
    division="Randstad division"
    sector="Marketing und Vertrieb"
    jobType="Temporary"
    locationIcon="marker"
    salaryIcon="salary"
    jobTypeIcon="briefcase"
    locationIconAttributes={{"aria-label": "location icon aria-label"}}
    salaryIconAttributes={{"aria-label": "hello salary icon aria-label"}}
    jobTypeIconAttributes={{"aria-label": "jobType icon aria label"}}
    enableLocation={true}
    enableSalary={true}
    enableJobType={true}
    fourthOptionField="client_name_settings"
    fourthOptionIcon="factory"
    fourthOptionAriaLabelValue="Fourth option aria-label"
    lowerCased={false}
    activeView="grid"
  />
  <JobCard
    description="descriptif du posteSous la responsabilité d'un chef d'équipe, vos missions seront les suivantes:- La sécurisation de votre poste- Réaliser la pose de planchers et de rails (mise en place de scotch et de joints)- Effectuer la pose de luminaires provisoires- Mise en place de protections sur parois- Exécuter les opérations de nettoyage de votre poste de travail- Retirer des copeaux par système d'aspiration- Passer la soufflette à air compriméHoraires 2X8, sal"
    id="Job card id"
    url="Url to the job details page"
    date="posted 22 march 2023"
    enableLogo={true}
    favoriteJobsEnabled={true}
    favorited={false}
    logoAltTagValue="logo alt text"
    logoSrcTagValue="https://bynder-public.s3.amazonaws.com/media/6EF965C8-0E83-47D9-ABF1A5C7AC6D092A/0/B591E16A-8CC3-4F5D-ABC89781EFC13D7A/webimage-333390C9-7283-44B4-83FDFA1C921A763C.png"
    infoIconAriaLabel="Info icon aria label"
    closeIconAriaLabel="Close icon aria label"
    onMouseDownClick={() => {console.log("eval(jobData.dataLayerJobClick)")}}
    hasBackground={false}
    viewJobText="show job details"
    closeText=""
    location="Sylt, Schleswig-Holstein"
    salary="£45 per year, Plus expenses"
    clientName="Randstad korea"
    workHours="full-time"
    education="BA in social work"
    duration="unbefristet"
    division="Randstad division"
    sector="Marketing und Vertrieb"
    jobType="Temporary"
    locationIcon="marker"
    salaryIcon="salary"
    jobTypeIcon="briefcase"
    locationIconAttributes={{"aria-label": "location icon aria-label"}}
    salaryIconAttributes={{"aria-label": "hello salary icon aria-label"}}
    jobTypeIconAttributes={{"aria-label": "jobType icon aria label"}}
    enableLocation={true}
    enableSalary={true}
    enableJobType={true}
    fourthOptionField="client_name_settings"
    fourthOptionIcon="factory"
    fourthOptionAriaLabelValue="Fourth option aria-label"
    lowerCased={false}
    activeView="grid"
  />
</JobCardList>
```
