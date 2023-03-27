```jsx
import { ShowMore } from "@ffw/randstad-shared-components";

const jobs = [
  {
  "id": "a3f48d60-876f-43ff-a091-87b768180c28",
  "job": {
    "employmentCategories": [
      "Full time",
      "Part time"
    ],
    "jobPosting": {
      "jobTitle": "DO NOT REMOVE - APPLY TEST JOB 4",
      "jobDescription": "this is a test",
      "webDetail": {},
      "workLocationAddresses": [
        {
          "regionCode": "NL",
          "postalCode": "1112TC",
          "locality": "Diemen",
          "addressLineOne": "Diemermere 25"
        }
      ]
    }
  },
  "createdDate": "2023-03-27T11:54:02.559907213Z"
  },
  {
  "id": "a3f48d60-876f-43ff-a291-87b768180c28",
  "job": {
    "employmentCategories": [
      "Full time",
      "Part time"
    ],
    "jobPosting": {
      "jobTitle": "DO NOT REMOVE - APPLY TEST JOB 4",
      "jobDescription": "this is a test",
      "webDetail": {},
      "workLocationAddresses": [
        {
          "regionCode": "NL",
          "postalCode": "1112TC",
          "locality": "Diemen",
          "addressLineOne": "Diemermere 25"
        }
      ]
    }
  },
  "createdDate": "2023-03-27T11:54:02.559907213Z"
  }
];

const totalJobs = [
  {
  "id": "a3f48d60-876f-43ff-a091-87b768180c28",
  "job": {
    "employmentCategories": [
      "Full time",
      "Part time"
    ],
    "jobPosting": {
      "jobTitle": "DO NOT REMOVE - APPLY TEST JOB 4",
      "jobDescription": "this is a test",
      "webDetail": {},
      "workLocationAddresses": [
        {
          "regionCode": "NL",
          "postalCode": "1112TC",
          "locality": "Diemen",
          "addressLineOne": "Diemermere 25"
        }
      ]
    }
  },
  "createdDate": "2023-03-27T11:54:02.559907213Z"
  },
  {
  "id": "a3f48d60-876f-43ff-a291-87b768180c28",
  "job": {
    "employmentCategories": [
      "Full time",
      "Part time"
    ],
    "jobPosting": {
      "jobTitle": "DO NOT REMOVE - APPLY TEST JOB 4",
      "jobDescription": "this is a test",
      "webDetail": {},
      "workLocationAddresses": [
        {
          "regionCode": "NL",
          "postalCode": "1112TC",
          "locality": "Diemen",
          "addressLineOne": "Diemermere 25"
        }
      ]
    }
  },
  "createdDate": "2023-03-27T11:54:02.559907213Z"
  },
  {
  "id": "a3f48d60-876f-43ff-a291-87b768189c28",
  "job": {
    "employmentCategories": [
      "Full time",
      "Part time"
    ],
    "jobPosting": {
      "jobTitle": "DO NOT REMOVE - APPLY TEST JOB 4",
      "jobDescription": "this is a test",
      "webDetail": {},
      "workLocationAddresses": [
        {
          "regionCode": "NL",
          "postalCode": "1112TC",
          "locality": "Diemen",
          "addressLineOne": "Diemermere 25"
        }
      ]
    }
  },
  "createdDate": "2023-03-27T11:54:02.559907213Z"
  }
];

<ShowMore
  jobsList={jobs}
  totalJobs={totalJobs}
  textJobsSeen="Seen Jobs"
  textViewMore="View More"
  ariaLabel="show more"
/>;
```
